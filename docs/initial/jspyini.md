# Initialisation 
Before using TunePlay SDK, initialize it with your Basic Authorization.

## Javascript 

```bash
import TunePlay from '@tuneplay/sdk';

const tp = new TunePlay({
    security: basauth
});

```

-----

## Python

```bash
from tuneplay_sdk import TunePlay

tp = TunePlay(security=basuth)

```
This setup prepares the SDK for making API calls on your behalf.