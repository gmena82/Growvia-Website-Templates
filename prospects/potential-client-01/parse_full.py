from bs4 import BeautifulSoup
from pathlib import Path
soup = BeautifulSoup(Path('scrape.html').read_text(encoding='utf-8'), 'html.parser')
for tag in soup.find_all(['h1','h2','h3','p','li']):
    text = tag.get_text(strip=True)
    if text and len(text.split()) > 3:
        print(f"{tag.name.upper()}: {text}")
