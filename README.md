![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

# Atelier Products API Service

## Kamran Masood [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/kevinzhugao)](https://github.com/kamasood)

The Atelier Products API has been refactored as a microservice from the existing monlithic API of an e-commerce website, Atelier. It responds to several RESTful endpoints, detailed below.

## Getting Started

1) Install dependencies with ```npm install```

2) Configure your .env file, based on the example.env provided

3) Configure database, using ETL files in ```data```

4) Run the server with ```npm start```

## API Endpoints
### GET /products

Retrieves a list of products.

#### Parameters

| **Parameter** | **Type** | **Description**                                 |
|---------------|----------|-------------------------------------------------|
| page          | integer  | Selects the page of results. Default 1.         |
| count         | integer  | Specifies how many results per page. Default 5. |

#### Response status: 200 OK
```json
{
  [
  {
        "id": 1,
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140"
    },
  {
        "id": 2,
        "name": "Bright Future Sunglasses",
        "slogan": "You've got to wear shades",
        "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
        "category": "Accessories",
        "default_price": "69"
    },
  {
        "id": 3,
        "name": "Morning Joggers",
        "slogan": "Make yourself a morning person",
        "description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": "40"
    },
    // ...
  ]
}
```

### GET /products/:product_id

Returns all product level information for a specified product ID.

#### Parameters

| **Parameter** | **Type** | **Description**                         |
|---------------|----------|-----------------------------------------|
| product_id    | integer  | Required ID of the product requested.   |

#### Response status: 200 OK
```json
{
  {
    "id": 11,
    "name": "Air Minis 250",
    "slogan": "Full court support",
    "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
    "category": "Basketball Shoes",
    "default_price": "0",
    "features": [
  	{
            "feature": "Sole",
            "value": "Rubber"
        },
  	{
            "feature": "Material",
            "value": "FullControlSkin"
        },
  	// ...
    ],
  }
}
```

### GET /products/:product_id/styles

Returns all styles available for a specified product ID.

#### Parameters

| **Parameter** | **Type** | **Description**                                 |
|---------------|----------|-------------------------------------------------|
| product_id    | integer  | Required ID of the product requested.           |

#### Response status: 200 OK

```json
{
    "product_id": "1",
    "results": [
  	{
            "style_id": 1,
            "name": "Forest Green & Black",
            "original_price": "140",
            "sale_price": "0",
            "default?": true,
            "photos": [
  			{
                    "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_1_photo_number.jpg"
                },
  			{
                    "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_1_photo_number.jpg"
                }
  			// ...
            ],
        "skus": {
                	"37": {
                    		"quantity": 8,
                    		"size": "XS"
                	},
                	"38": {
                    		"quantity": 16,
                    		"size": "S"
                	},
                	"39": {
                    		"quantity": 17,
                    		"size": "M"
                	},
            //...
            	}
    },
  {
        "style_id": 2,
        "name": "Desert Brown & Tan",
        "original_price": "140",
        "sale_price": "0",
        "default?": false,
        "photos": [
  			{
                    "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_2_photo_number.jpg"
        }
      // ...
            ],
        "skus": {
                	"37": {
                    		"quantity": 8,
                    		"size": "XS"
                	},
                	"38": {
                    		"quantity": 16,
                    		"size": "S"
                	},
                	"39": {
                    		"quantity": 17,
                    		"size": "M"
                	},
            //...
            	}
    },
  // ...
}
```

### GET /products/:product_id/related

Returns the id's of products related to the product specified.

#### Parameters
Endpoint should contain question_id paramenter. Body parameters should be in body in json form.

| **Parameter** | **Type** | **Description**                         |
|---------------|----------|-----------------------------------------|
| product_id    | integer  | Required ID of the product requested.   |

#### Response status: 200 OK

```json
[
  2,
  3,
  8,
  7
],
```

