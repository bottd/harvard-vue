export async function getTreasures(url) {
  const response = await fetch(url);
  const results = await response.json();
  const treasures = results.records.filter(
    record => record.imagepermissionlevel === 0,
  );
  const cleanTreasures = treasures.map(treasure => ({
    pageUrl: treasure.url,
    credit: treasure.creditlines,
    title: treasure.title,
    imageUrl: treasure.images[0].baseimageurl,
  }));
  return {
    treasures: cleanTreasures,
    next: results.info.next || '',
    prev: results.info.prev || '',
  };
}
