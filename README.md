# Show All Games

Get all games from the database

**URL** : `/games/`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

[games/][games/]

```json
[
  {
    "id": 3498,
    "slug": "grand-theft-auto-v",
    "name": "Grand Theft Auto V",
    "released": "2013-09-17",
    "background_image": "https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg",
    "rating": 4.47,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "genres": [],
    "clip": {},
    "short_screenshots": []
  },
  {},
  {}
]
```

# Show One Game

Get the details of a game by its id.

**URL** : `/games/:id`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content examples**

[games/13536][games/13536]

```json
{
  "id": 13536,
  "slug": "portal",
  "name": "Portal",
  "released": "2007-10-09",
  "background_image": "https://media.rawg.io/media/screenshots/19d/19d3effb85e8f40d0b5b004fb5ab5c76.jpg",
  "rating": 4.49,
  "saturated_color": "0f0f0f",
  "dominant_color": "0f0f0f",
  "genres": [],
  "clip": {},
  "short_screenshots": []
}
```
