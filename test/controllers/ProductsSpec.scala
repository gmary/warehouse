package test.controllers

import org.specs2.mutable._

import play.api.test._
import play.api.test.Helpers._
import models.Product
import models.Product._
import org.joda.time.{DateTime, LocalDate}
import play.api.test.FakeApplication
import scala.Some


/**
 * Add your spec here.
 * You can mock out a whole application including requests, plugins etc.
 * For more information, consult the wiki.
 */
class ProductsSpec extends Specification {

  case class withProducts(products: Seq[Product]) extends BeforeAfter {

    import models.Product

    def before = {
      products.foreach(p => Product.save(p))
    }

    def after = {
      products.foreach(p => Product.remove(p))
    }
  }

  val product1 = new Product(name = "product1", details = "details1", category = "category1", expirationTerm = None)
  val product2 = new Product(name = "product2", details = "details2", category = "category2", expirationTerm = Some(new DateTime("2013-12-02")))
  val product3 = new Product(name = "product3", details = "details3", category = "category1", expirationTerm = Some(new DateTime("2011-04-02")))

  val init = withProducts(Seq(product1, product2, product3))

  "Products" should {

    "be all retrieved " in {
      running(FakeApplication()) {
        val allProducts = route(FakeRequest(GET, "/api/products")).get
        status(allProducts) must equalTo(OK)
        contentType(allProducts) must beSome.which(_ == "application/json; charset=utf-8")
        contentAsString(allProducts) must contain("data-ng-app=\"warehouseApp\"")
      }
    }
  }


}