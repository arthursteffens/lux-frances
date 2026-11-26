"""Gera MP3s com edge-tts a partir de uma lista JSON [{voice, text, out}, ...].
Chamado por tools/gen-audio.js. Requer: pip install edge-tts"""
import asyncio
import json
import os
import sys

import edge_tts

CONCURRENCY = 3
RETRIES = 8


async def one(job, sem, done, total):
    async with sem:
        os.makedirs(os.path.dirname(job["out"]), exist_ok=True)
        tmp = job["out"] + ".part"
        for attempt in range(RETRIES):
            try:
                await edge_tts.Communicate(job["text"], job["voice"]).save(tmp)
                if os.path.getsize(tmp) < 500:
                    raise RuntimeError("arquivo vazio")
                os.replace(tmp, job["out"])
                done[0] += 1
                print(f"[{done[0]}/{total}] {os.path.basename(os.path.dirname(job['out']))} {job['voice']}", flush=True)
                return True
            except Exception as e:  # rede instável: tenta de novo
                if attempt == RETRIES - 1:
                    print(f"ERRO {job['out']}: {e}", file=sys.stderr, flush=True)
                await asyncio.sleep(min(20, 2 * (attempt + 1)))
        if os.path.exists(tmp):
            os.remove(tmp)
        return False


async def main(path):
    with open(path, encoding="utf-8") as f:
        jobs = json.load(f)
    sem = asyncio.Semaphore(CONCURRENCY)
    done = [0]
    results = await asyncio.gather(*(one(j, sem, done, len(jobs)) for j in jobs))
    failed = results.count(False)
    if failed:
        print(f"{failed} falharam (rode de novo para tentar só os que faltam).", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    asyncio.run(main(sys.argv[1]))
