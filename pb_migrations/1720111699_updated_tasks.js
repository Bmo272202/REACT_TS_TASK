/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sne4nnwcv119ilh")

  collection.listRule = null
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sne4nnwcv119ilh")

  collection.listRule = ""
  collection.createRule = null

  return dao.saveCollection(collection)
})
