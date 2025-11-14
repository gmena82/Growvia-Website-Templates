from bs4 import BeautifulSoup
from pathlib import Path
soup = BeautifulSoup(Path('scrape.html').read_text(encoding='utf-8'), 'html.parser')
for tag in soup.find_all(['h1','h2','h3','p','li']):
    text = tag.get_text(strip=True)
    if text and any(keyword in text.lower() for keyword in ['electronics','iphone','repair','orlando','sell','trade','samsung','buy','cash','macbook','ipad','cell phone']):
        print(tag.name.upper()+': '+text)
