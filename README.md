 # "Backend with Node.js" - Task 2
## Package version and dotenv
You must change the package version to 1.1.0.
You must read the ApiKey value from `.env` file, using the `dotenv` package. The creation of the `.env` file should be done by you.

You can get your personal API Key [here](https://api.nasa.gov/).

## Endpoints
It is required that you code all the specified endpoints below using the NASA APIs.

### GET :: /mars/manifest/:roverName
This endpoint should get the information of only the **last manifest** of the specified rover.
#### Params
 1. `roverName` as URL Param.
#### Service to consume
**Mars Rover Photos**
Use the manifests endpoint:

    https://api.nasa.gov/mars-photos/api/v1/manifests/:roverName
You can read the documentation for more information.
#### Responses examples
**200 OK**
```json
{
    "name":  "Curiosity",
    "landing_date":  "2012-08-06",
    "launch_date":  "2011-11-26",
    "status":  "active",
    "max_sol":  3138,
    "max_date":  "2021-06-04",
    "total_photos":  496319,
    "last_manifest": {
	    "sol":  3138,
	    "earth_date":  "2021-06-04",
	    "total_photos":  32,
	    "cameras":  [
		    "FHAZ",
		    "NAVCAM",
		    "RHAZ"    
	    ]    
    }
}
```
 **400 Bad Request**
 If NASA API responds with an error, you should return the response below with status 400.
```json
{
    "code": "bad_request",
    "message": "Bad request. Please check your parameters values"
}
```	 
### GET :: /neo/feed
This endpoint should get the information of the Near Earth Objects (NEO) of **ONLY the current date**.
#### Service to consume
**NeoWs (Near Earth Object Web Service) - NeoFeed endpoint**
`https://api.nasa.gov/neo/rest/v1/feed`

While consuming this API the `start_date` and `end_date` query params should always be the current date. For example: If today is `5th June 2021`, then the `start_date` and `end_date` params should be `2021-06-05` (YYYY-MM-DD).
For ISO 8601 Date formatting, you can use Luxon library: https://moment.github.io/luxon/docs/manual/formatting.html#iso-8601
For more information about this endpoint, check the NASA Documentation at https://api.nasa.gov/.
#### Responses examples
**200 OK**
```json
{
  "element_count": 11,
  "near_earth_objects": {
    "2021-06-05": [
      {
        "links": {
          "self": "http://www.neowsapp.com/rest/v1/neo/2329338?api_key=SECRET"
        },
        "id": "2329338",
        "neo_reference_id": "2329338",
        "name": "329338 (2001 JW2)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2329338",
        "absolute_magnitude_h": 19.0,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.4212646106,
            "estimated_diameter_max": 0.9419763057
          },
          "meters": {
            "estimated_diameter_min": 421.2646105562,
            "estimated_diameter_max": 941.9763057186
          },
          "miles": {
            "estimated_diameter_min": 0.2617616123,
            "estimated_diameter_max": 0.5853167591
          },
          "feet": {
            "estimated_diameter_min": 1382.1017848971,
            "estimated_diameter_max": 3090.4735428537
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2021-06-05",
            "close_approach_date_full": "2021-Jun-05 20:58",
            "epoch_date_close_approach": 1622926680000,
            "relative_velocity": {
              "kilometers_per_second": "21.9695282588",
              "kilometers_per_hour": "79090.3017316444",
              "miles_per_hour": "49143.6377620876"
            },
            "miss_distance": {
              "astronomical": "0.3445244213",
              "lunar": "134.0199998857",
              "kilometers": "51540119.589462631",
              "miles": "32025545.2686250678"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      }
    ]
  }
}
```
**500 Internal Server Error**
If any error occurrs while consuming the NASA API, the response should be with status 500 and the following json.
```json
{
    "code": "internal_server_error",
    "message": "Something went wrong"
}
```
