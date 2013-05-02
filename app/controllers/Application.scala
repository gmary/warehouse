package controllers

import play.api.mvc._

object Application extends Controller {

  def main(any: String) = Action {
    Ok(views.html.main())
  }

  def index = Action {
    Ok(views.html.index())
  }

  def products = Action {
    Ok(views.html.products())
  }

  def removeProductDialog = Action {
    Ok(views.html.dialogs.removeProductDialog())
  }

}