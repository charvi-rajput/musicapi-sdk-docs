# Search for Tracks
Search across TunePlay’s music library using simple keywords.

## Javascript

```js
const results = await tp.search.tracks('jazz');

results.forEach(group => {
  group.songs.forEach(song => {
    console.log(`${song.title} by ${song.artist}`);
  });
});

```

-----

## Python

```python
results = tp.search.tracks('jazz')

for group in results:
    for song in group['songs']:
        print(f"{song['title']} by {song['artist']}")
```