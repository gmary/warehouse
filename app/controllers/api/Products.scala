package controllers.api

import play.api.mvc._
import play.api.libs.json.Json._
import models._
import controllers.Actions._

import com.mongodb.casbah.WriteConcern
import org.joda.time.DateTime
import org.bson.types.ObjectId


object Products extends Controller {

  case class TestClass(text: String)

  def all = Action {
    implicit request =>
      val products = Product.findAll().toList
      Ok(toJson(products))
  }

  def create = JsonAction[Product] {
    product =>
      Product.save(product, WriteConcern.Safe)
      Ok(toJson(product))
  }

  def loadData = Action {
    implicit request =>
      val product1 = new Product(name = "product1", details = "details1", category = "category1", expirationTerm = None)
      val product2 = new Product(name = "product2", details = "details2", category = "category2", expirationTerm = Some(new DateTime("2013-12-02")))
      val product3 = new Product(name = "product3", details = "details3", category = "category1", expirationTerm = Some(new DateTime("2011-04-02")))

      Seq(product1, product2, product3).foreach(p => Product.save(p, WriteConcern.Safe))
      val products = Product.findAll().toList
      Ok(toJson(products))
  }

  def delete(id: ObjectId) = Action {
    Product.removeById(id)
    Ok("")
  }
}