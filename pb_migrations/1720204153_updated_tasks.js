/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sne4nnwcv119ilh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "exevuupn",
    "name": "state",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Created",
        "In_Process",
        "Done"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sne4nnwcv119ilh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "exevuupn",
    "name": "state",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Created",
        "In_Process",
        "Done",
        "jose"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
