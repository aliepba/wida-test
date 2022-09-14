// Format Collection Request API

{
	"info": {
		"_postman_id": "f9681630-1874-4f65-8177-edd209d65a5c",
		"name": "invoices",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "11577660"
	},
	"item": [
		{
			"name": "create",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"invoice_no\" : \"9\",\r\n  \"date\" : \"12/09/2022\",\r\n  \"customer_name\" : \"aliepba\",\r\n  \"salesperson_name\" : \"adudu\",\r\n  \"payment_type\" : \"CASH\",\r\n  \"list_product\" : [{\r\n    \"item\" : \"12345\",\r\n    \"quantity\" : \"123456\",\r\n    \"total_cogs\" : \"123\",\r\n    \"total_price_sold\" : \"71641\"\r\n  },{\r\n    \"item\" : \"123131345\",\r\n    \"quantity\" : \"12314456\",\r\n    \"total_cogs\" : \"123\",\r\n    \"total_price_sold\" : \"71641\"\r\n  }]\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:3000/invoice",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"invoice"
					]
				}
			},
			"response": [
				{
					"name": "success",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"invoice_no\" : \"9\",\r\n  \"date\" : \"12/09/2022\",\r\n  \"customer_name\" : \"aliepba\",\r\n  \"salesperson_name\" : \"adudu\",\r\n  \"payment_type\" : \"CASH\",\r\n  \"list_product\" : [{\r\n    \"item\" : \"12345\",\r\n    \"quantity\" : \"123456\",\r\n    \"total_cogs\" : \"123\",\r\n    \"total_price_sold\" : \"71641\"\r\n  },{\r\n    \"item\" : \"123131345\",\r\n    \"quantity\" : \"12314456\",\r\n    \"total_cogs\" : \"123\",\r\n    \"total_price_sold\" : \"71641\"\r\n  }]\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3000/invoice",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"invoice"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "46"
						},
						{
							"key": "ETag",
							"value": "W/\"2e-EW82+dxPllCTka4QAPVAkTSujuc\""
						},
						{
							"key": "Date",
							"value": "Wed, 14 Sep 2022 04:34:51 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"status\": \"success\",\n    \"data\": {\n        \"invoice_no\": \"9\"\n    }\n}"
				},
				{
					"name": "create",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"invoice_no\" : \"9\",\r\n  \"date\" : \"12/09/2022\",\r\n  \"customer_name\" : \"aliepba\",\r\n  \"salesperson_name\" : \"adudu\",\r\n  \"payment_type\" : \"CASH\",\r\n  \"list_product\" : [{\r\n    \"item\" : \"12345\",\r\n    \"quantity\" : \"123456\",\r\n    \"total_cogs\" : \"123\",\r\n    \"total_price_sold\" : \"71641\"\r\n  },{\r\n    \"item\" : \"123131345\",\r\n    \"quantity\" : \"12314456\",\r\n    \"total_cogs\" : \"123\",\r\n    \"total_price_sold\" : \"71641\"\r\n  }]\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3000/invoice",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"invoice"
							]
						}
					},
					"status": "Bad Request",
					"code": 400,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "34"
						},
						{
							"key": "ETag",
							"value": "W/\"22-X/pLDQxXBmhUMXB08ZgsmhqP1Lc\""
						},
						{
							"key": "Date",
							"value": "Wed, 14 Sep 2022 04:35:10 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"inovice no duplicate\"\n}"
				}
			]
		},
		{
			"name": "update",
			"request": {
				"method": "PUT",
				"header": [],
				"url": {
					"raw": "localhost:3000/invoice/4",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"invoice",
						"4"
					]
				}
			},
			"response": [
				{
					"name": "success",
					"originalRequest": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"invoice_no\" : \"3\",\r\n  \"date\" : \"12/09/2022\",\r\n  \"customer_name\" : \"aliepba\",\r\n  \"salesperson_name\" : \"aduduu\",\r\n  \"payment_type\" : \"CASH\",\r\n  \"list_product\" : [{\r\n    \"item\" : \"123451\",\r\n    \"quantity\" : \"123456\",\r\n    \"total_cogs\" : \"123\",\r\n    \"total_price_sold\" : \"71641\"\r\n  },{\r\n    \"item\" : \"123131345\",\r\n    \"quantity\" : \"12314456\",\r\n    \"total_cogs\" : \"123\",\r\n    \"total_price_sold\" : \"71641\"\r\n  }]\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3000/invoice/4",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"invoice",
								"4"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "92"
						},
						{
							"key": "ETag",
							"value": "W/\"5c-9iyY5gbYsnNqzBJCTNJ8+RfZm5Q\""
						},
						{
							"key": "Date",
							"value": "Wed, 14 Sep 2022 04:36:26 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"status\": \"success\",\n    \"message\": \"Invoice No 4 updated successfully\",\n    \"data\": {\n        \"invoice_no\": \"4\"\n    }\n}"
				},
				{
					"name": "error",
					"originalRequest": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"invoice_no\" : \"3\",\r\n  \"date\" : \"12/09/2022\",\r\n  \"customer_name\" : \"aliepba\",\r\n  \"salesperson_name\" : \"aduduu\",\r\n  \"payment_type\" : \"CASH\",\r\n  \"list_product\" : [{\r\n    \"item\" : \"123451\",\r\n    \"quantity\" : \"123456\",\r\n    \"total_cogs\" : \"123\",\r\n    \"total_price_sold\" : \"71641\"\r\n  },{\r\n    \"item\" : \"123131345\",\r\n    \"quantity\" : \"12314456\",\r\n    \"total_cogs\" : \"123\",\r\n    \"total_price_sold\" : \"71641\"\r\n  }]\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3000/invoice/900",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"invoice",
								"900"
							]
						}
					},
					"status": "Bad Request",
					"code": 400,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "35"
						},
						{
							"key": "ETag",
							"value": "W/\"23-zNpwuvk3UrW/77XpiFJNgd34LPY\""
						},
						{
							"key": "Date",
							"value": "Wed, 14 Sep 2022 04:36:46 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"Invoice 900 not found\"\n}"
				}
			]
		},
		{
			"name": "delete",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "localhost:3000/invoice/9",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"invoice",
						"9"
					]
				}
			},
			"response": [
				{
					"name": "error",
					"originalRequest": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "localhost:3000/invoice/900",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"invoice",
								"900"
							]
						}
					},
					"status": "Bad Request",
					"code": 400,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "38"
						},
						{
							"key": "ETag",
							"value": "W/\"26-kj9cria/3AB28yijdPkdmhfUMmw\""
						},
						{
							"key": "Date",
							"value": "Wed, 14 Sep 2022 04:45:51 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"Invoice no 900 not found\"\n}"
				},
				{
					"name": "New Request",
					"originalRequest": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "localhost:3000/invoice/9",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"invoice",
								"9"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "89"
						},
						{
							"key": "ETag",
							"value": "W/\"59-UrY1CriGgAEwpM/SCHT85BK6zk0\""
						},
						{
							"key": "Date",
							"value": "Wed, 14 Sep 2022 04:46:34 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"status\": \"success\",\n    \"message\": \"Invoice 9 successfully deleted\",\n    \"data\": {\n        \"invoice_no\": \"9\"\n    }\n}"
				}
			]
		},
		{
			"name": "get",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": [
				{
					"name": "all",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/invoice",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"invoice"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "2072"
						},
						{
							"key": "ETag",
							"value": "W/\"818-Y/smL+TIB1SokfbHXAry/CgFhmI\""
						},
						{
							"key": "Date",
							"value": "Wed, 14 Sep 2022 04:48:29 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"status\": \"success\",\n    \"message\": \"List of invoices\",\n    \"data\": {\n        \"count\": 12,\n        \"rows\": [\n            {\n                \"invoice_no\": \"1\",\n                \"date\": \"2021-01-01T00:00:00.000Z\",\n                \"customer_name\": \"John\",\n                \"salesperson_name\": \"Doe\",\n                \"payment_type\": \"CASH\",\n                \"list_product\": [\n                    {\n                        \"item_name\": \"Bluetooth speaker\",\n                        \"quantity\": 3,\n                        \"total_cogs\": 630000,\n                        \"total_price_sold\": 756000,\n                        \"profit\": 126000\n                    }\n                ]\n            },\n            {\n                \"invoice_no\": \"2\",\n                \"date\": \"2021-01-01T00:00:00.000Z\",\n                \"customer_name\": \"John\",\n                \"salesperson_name\": \"Doe\",\n                \"payment_type\": \"CASH\",\n                \"list_product\": [\n                    {\n                        \"item_name\": \"Laptop charger\",\n                        \"quantity\": 4,\n                        \"total_cogs\": 800000,\n                        \"total_price_sold\": 960000,\n                        \"profit\": 160000\n                    }\n                ]\n            },\n            {\n                \"invoice_no\": \"3\",\n                \"date\": \"2021-01-03T00:00:00.000Z\",\n                \"customer_name\": \"Jane\",\n                \"salesperson_name\": \"Doe\",\n                \"payment_type\": \"CREDIT\",\n                \"list_product\": [\n                    {\n                        \"item_name\": \"LCD Monitor\",\n                        \"quantity\": 1,\n                        \"total_cogs\": 500000,\n                        \"total_price_sold\": 600000,\n                        \"profit\": 100000\n                    }\n                ]\n            },\n            {\n                \"invoice_no\": \"7\",\n                \"date\": \"2021-01-05T00:00:00.000Z\",\n                \"customer_name\": \"Jeff\",\n                \"salesperson_name\": \"Pete\",\n                \"payment_type\": \"CREDIT\",\n                \"list_product\": [\n                    {\n                        \"item_name\": \"Bluetooth speaker\",\n                        \"quantity\": 2,\n                        \"total_cogs\": 420000,\n                        \"total_price_sold\": 504000,\n                        \"profit\": 84000\n                    }\n                ]\n            },\n            {\n                \"invoice_no\": \"4\",\n                \"date\": \"2022-12-08T17:00:00.000Z\",\n                \"customer_name\": \"aliepba\",\n                \"salesperson_name\": \"aduduu\",\n                \"payment_type\": \"CASH\",\n                \"list_product\": [\n                    {\n                        \"item_name\": \"123131345\",\n                        \"quantity\": 12314456,\n                        \"total_cogs\": 123,\n                        \"total_price_sold\": 71641,\n                        \"profit\": 71518\n                    }\n                ]\n            },\n            {\n                \"invoice_no\": \"5\",\n                \"date\": \"2021-01-04T00:00:00.000Z\",\n                \"customer_name\": \"Frank\",\n                \"salesperson_name\": \"pepe\",\n                \"payment_type\": \"CASH\",\n                \"list_product\": [\n                    {\n                        \"item_name\": \"Laptop charger\",\n                        \"quantity\": 3,\n                        \"total_cogs\": 600000,\n                        \"total_price_sold\": 720000,\n                        \"profit\": 120000\n                    }\n                ]\n            },\n            {\n                \"invoice_no\": \"6\",\n                \"date\": \"2021-01-01T00:00:00.000Z\",\n                \"customer_name\": \"John\",\n                \"salesperson_name\": \"Doe\",\n                \"payment_type\": \"CASH\",\n                \"list_product\": [\n                    {\n                        \"item_name\": \"Bluetooth speaker\",\n                        \"quantity\": 1,\n                        \"total_cogs\": 210000,\n                        \"total_price_sold\": 252000,\n                        \"profit\": 42000\n                    }\n                ]\n            },\n            {\n                \"invoice_no\": \"8\",\n                \"date\": \"2022-12-08T17:00:00.000Z\",\n                \"customer_name\": \"aliepba\",\n                \"salesperson_name\": \"adudu\",\n                \"payment_type\": \"CASH\",\n                \"list_product\": [\n                    {\n                        \"item_name\": \"12345\",\n                        \"quantity\": 123456,\n                        \"total_cogs\": 123,\n                        \"total_price_sold\": 71641,\n                        \"profit\": 71518\n                    }\n                ]\n            }\n        ]\n    },\n    \"total_pages\": 2\n}"
				},
				{
					"name": "bySizePageDate",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/invoice?page=0&size=5&dates=2022-12-08",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"invoice"
							],
							"query": [
								{
									"key": "page",
									"value": "0"
								},
								{
									"key": "size",
									"value": "5"
								},
								{
									"key": "dates",
									"value": "2022-12-08"
								}
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "584"
						},
						{
							"key": "ETag",
							"value": "W/\"248-IQjRsEkIEqNCkwBmqoiBZ01q+Hc\""
						},
						{
							"key": "Date",
							"value": "Wed, 14 Sep 2022 05:03:38 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"status\": \"success\",\n    \"message\": \"List of invoices\",\n    \"data\": {\n        \"count\": 3,\n        \"rows\": [\n            {\n                \"invoice_no\": \"4\",\n                \"date\": \"2022-12-08T00:00:00.000Z\",\n                \"customer_name\": \"aliepba\",\n                \"salesperson_name\": \"aduduu\",\n                \"payment_type\": \"CASH\",\n                \"list_product\": [\n                    {\n                        \"item_name\": \"123131345\",\n                        \"quantity\": 12314456,\n                        \"total_cogs\": 123,\n                        \"total_price_sold\": 71641,\n                        \"profit\": 71518\n                    }\n                ]\n            },\n            {\n                \"invoice_no\": \"8\",\n                \"date\": \"2022-12-08T00:00:00.000Z\",\n                \"customer_name\": \"aliepba\",\n                \"salesperson_name\": \"adudu\",\n                \"payment_type\": \"CASH\",\n                \"list_product\": [\n                    {\n                        \"item_name\": \"12345\",\n                        \"quantity\": 123456,\n                        \"total_cogs\": 123,\n                        \"total_price_sold\": 71641,\n                        \"profit\": 71518\n                    }\n                ]\n            }\n        ]\n    },\n    \"total_pages\": 1\n}"
				}
			]
		},
		{
			"name": "import",
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "localhost:3000/excel",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"excel"
					]
				}
			},
			"response": []
		}
	]
}
