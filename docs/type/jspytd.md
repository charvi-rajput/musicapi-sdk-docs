# Type Definitions
Understand the structure of objects returned by the SDK.


## Javascript (Typescript)

```js
type songs = {
  id: number;
  title: string;
  artist: string;
};

type playlist = {
  id: number;
  name: string;
  songs: songs[];
};

```

-----

## Python (Typing)

```python
from typing import TypedDict, List

class songs(TypedDict):
    id: int
    title: str
    artist: str

class playlist(TypedDict):
    id: int
    name: str
    songs: List[songs]
```