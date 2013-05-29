package models

import play.api.Play.current
import com.novus.salat._
import com.novus.salat.annotations._
import com.novus.salat.dao._
import com.mongodb.casbah.Imports._
import play.api.libs.json._
import play.api.libs.functional.syntax._

import se.radley.plugin.salat._
import se.radley.plugin.salat.Binders._
import org.joda.time.{LocalDate, DateTime}
import mongoContext._
import com.mongodb.casbah.commons.conversions.scala.{RegisterJodaTimeConversionHelpers, RegisterConversionHelpers}

/**
 * products case class.
 * Product: guillaume
 * Date: 27/04/13
 * Time: 00:07
 */
case class Product(
                    id: ObjectId = new ObjectId(),
                    name: String,
                    details: String,
                    category: String,
                    creationDate: DateTime = DateTime.now(),
                    expirationTerm: Option[DateTime])


object Product extends ProductDAO with ProductJson

trait ProductDAO extends ModelCompanion[Product, ObjectId] {
  def collection = mongoCollection("products")

  val dao = new SalatDAO[Product, ObjectId](collection) {}

  // Indexes
  //collection.ensureIndex(DBObject("Productname" -> 1), "Product_email", unique = true)

  // Queries
  def findOneByName(name: String): Option[Product] = dao.findOne(MongoDBObject("name" -> name))
}

/**
 * Trait used to convert to and from json
 */
trait ProductJson {

  val pattern = "yyyy-MM-dd"

  implicit val dateFormat =
    Format[DateTime](Reads.jodaDateReads(pattern), Writes.jodaDateWrites(pattern))

  implicit val productJsonWrite = new Writes[Product] {
    def writes(p: Product): JsValue = {
      Json.obj(
        "id" -> p.id,
        "name" -> p.name,
        "details" -> p.details,
        "category" -> p.category,
        "creationDate" -> p.creationDate,
        "expirationTerm" -> p.expirationTerm
      )
    }
  }
  implicit val productJsonRead = (
    (__ \ 'id).read[ObjectId](new ObjectId()) ~
      (__ \ 'name).read[String] ~
      (__ \ 'details).read[String] ~
      (__ \ 'category).read[String] ~
      (__ \ 'creationDate).read[DateTime](DateTime.now()) ~
      (__ \ 'expirationTerm).readNullable[DateTime]
    )(Product.apply _)
}