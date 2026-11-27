# Dicionário completo — etapa 1: extrai dos dumps do Wiktionary (kaikki.org / wiktextract) só o que o app usa.
# Baixe numa pasta FORA do projeto (são ~800 MB):
#   https://kaikki.org/frwiktionary/raw-wiktextract-data.jsonl.gz  -> fr.jsonl.gz
#   https://kaikki.org/ptwiktionary/raw-wiktextract-data.jsonl.gz  -> pt.jsonl.gz
# Uso:  python tools/dict-extract.py <pasta>
# Gera na mesma pasta: fr_fr.jsonl (entradas francesas do Wiktionary francês), fr_pt.jsonl (entradas portuguesas
# do Wiktionary francês), pt_fr_entries.json (entradas francesas do Wiktionary português) e pt_pairs.json
# (palavras portuguesas com tradução para o francês). Depois: node tools/build-dict.js <pasta>
import gzip, json, os, sys

d = sys.argv[1]


def senses(e):
    return [{'g': (s.get('glosses') or [''])[0][:300], 'tags': s.get('tags'), 'form_of': s.get('form_of')} for s in e.get('senses', [])[:6]]


with open(os.path.join(d, 'fr_fr.jsonl'), 'w', encoding='utf-8') as out_fr, open(os.path.join(d, 'fr_pt.jsonl'), 'w', encoding='utf-8') as out_pt:
    for line in gzip.open(os.path.join(d, 'fr.jsonl.gz'), 'rt', encoding='utf-8'):
        e = json.loads(line)
        lc = e.get('lang_code')
        if lc == 'fr':
            out_fr.write(json.dumps({
                'word': e.get('word'), 'pos': e.get('pos'), 'tags': e.get('tags'),
                'tr': [t for t in e.get('translations', []) if t.get('lang_code') == 'pt'],
                'forms': e.get('forms'), 'senses': senses(e),
                'ipa': next((s.get('ipa') for s in e.get('sounds', []) if s.get('ipa')), None)
            }, ensure_ascii=False) + '\n')
        elif lc == 'pt':
            out_pt.write(json.dumps({'word': e.get('word'), 'pos': e.get('pos'), 'tags': e.get('tags'), 'senses': senses(e)}, ensure_ascii=False) + '\n')

ent, pairs = [], []
for line in gzip.open(os.path.join(d, 'pt.jsonl.gz'), 'rt', encoding='utf-8'):
    e = json.loads(line)
    lc = e.get('lang_code')
    if lc == 'fr':
        ent.append({'word': e.get('word'), 'pos': e.get('pos'), 'tags': e.get('tags'), 'senses': senses(e)})
    elif lc == 'pt':
        for t in e.get('translations', []):
            if t.get('lang_code') == 'fr' and t.get('word'):
                pairs.append([e.get('word'), e.get('pos'), t.get('word'), t.get('sense') or ''])
json.dump(ent, open(os.path.join(d, 'pt_fr_entries.json'), 'w', encoding='utf-8'), ensure_ascii=False)
json.dump(pairs, open(os.path.join(d, 'pt_pairs.json'), 'w', encoding='utf-8'), ensure_ascii=False)
print('ok:', len(ent), 'entradas francesas (pt.wiktionary),', len(pairs), 'traduções pt→fr')
