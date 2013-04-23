package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {

  def main(any: String) = Action {
    Ok(views.html.main())
  }

  def index = Action {
    Ok(views.html.index())
  }

  def page1 = Action {
    Ok(views.html.page1())
  }

  def page2 = Action {
    Ok(views.html.page2())
  }
  
}