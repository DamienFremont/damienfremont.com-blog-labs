package com.damienfremont.blog;

import static com.jayway.restassured.RestAssured.expect;
import static com.jayway.restassured.RestAssured.given;
import static java.util.Calendar.getInstance;
import static java.util.TimeZone.getTimeZone;
import static org.fest.assertions.Assertions.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.ClassRule;
import org.junit.Test;

import com.jayway.restassured.response.Cookie;
import com.jayway.restassured.response.Response;

import fr.speedyfleet.internal.auth.SpeedyFleetSecurity;
import fr.speedyfleet.util.JettyExternalResourceRule;

public class PersonService_level1 {
  @ClassRule
  public static JettyExternalResourceRule server = new JettyExternalResourceRule();

  @Test
  public void should_ask_auth() {
    expect().header("WWW-Authenticate", equalTo("Basic realm=\"login required\"")).when()
        .post(server.buildEitherConfiguredOrLocalServerUrl("resources/compte/login"));
  }

  @Test
  public void with_login_error_should_not_auth() {
    given().auth().basic("foo@exemple.org", "bar") //
        .expect().statusCode(403).body(equalTo("Mauvaise combinaison email / mot de passe.")) //
        .when().post(server.buildEitherConfiguredOrLocalServerUrl("resources/compte/login"));
  }

  @Test
  public void with_L1_VALIDA_user_should_not_auth() {
    given().auth().basic("eric.grasland@Xupsell.fr", "pass") //
        .expect().statusCode(403).body(equalTo("Mauvaise combinaison email / mot de passe.")) //
        .when().post(server.buildEitherConfiguredOrLocalServerUrl("resources/compte/login"));
  }

  @Test
  public void with_L2_ACTIVA_user_should_not_auth() {
    given().auth().basic("francis.faure@Xclinidis.com", "pass") //
        .expect().statusCode(403).body(equalTo("Mauvaise combinaison email / mot de passe.")) //
        .when().post(server.buildEitherConfiguredOrLocalServerUrl("resources/compte/login"));
  }

  @Test
  public void with_L3_ACTIVE_user_without_remember_should_auth() {
    Response withoutRememberMe = given().auth().basic("emmanuel.betito@jafim.fr", "pass") //
        .expect().cookie("email", new SpeedyFleetSecurity().encrypt("emmanuel.betito@jafim.fr")) //
        .when().post(server.buildEitherConfiguredOrLocalServerUrl("resources/compte/login"));
    Cookie emailCookie = withoutRememberMe.getDetailedCookies().get("email");

    assertThat(emailCookie.getMaxAge()).isEqualTo(-1);
    assertThat(emailCookie.getExpiryDate()).isNull();
  }

  @Test
  public void with_L3_ACTIVE_user_with_dont_remember_should_auth() {
    Response withDontRememberMe = given().auth().basic("emmanuel.betito@jafim.fr", "pass") //
        .expect().cookie("email", new SpeedyFleetSecurity().encrypt("emmanuel.betito@jafim.fr")) //
        .when().post(server.buildEitherConfiguredOrLocalServerUrl("resources/compte/login?rememberMe=false"));
    Cookie emailCookie = withDontRememberMe.getDetailedCookies().get("email");

    assertThat(emailCookie.getMaxAge()).isEqualTo(-1);
    assertThat(emailCookie.getExpiryDate()).isNull();
  }

  @Test
  public void with_L3_ACTIVE_user_with_remember_should_auth() {
    Response withRememberMe = given().auth().basic("emmanuel.betito@jafim.fr", "pass") //
        .expect().cookie("email", new SpeedyFleetSecurity().encrypt("emmanuel.betito@jafim.fr")) //
        .when().post(server.buildEitherConfiguredOrLocalServerUrl("resources/compte/login?rememberMe=true"));
    Cookie emailCookie = withRememberMe.getDetailedCookies().get("email");

    assertThat(emailCookie.getMaxAge()).isEqualTo(10 * 365 * 24 * 60 * 60);
    assertThat(emailCookie.getExpiryDate().after(getInstance(getTimeZone("GMT")).getTime())).isTrue();
  }

  @Test
  public void with_L4_DESACT_user_should_not_auth() {
    given().auth().basic("anthony.streicher@Xhapluspme.com", "pass") //
        .expect().statusCode(403).body(equalTo("Votre compte a été désactivé.")) //
        .when().post(server.buildEitherConfiguredOrLocalServerUrl("resources/compte/login"));
  }

  @Test
  public void with_L5_SUPPRI_user_should_not_auth() {
    given().auth().basic("aurelie.degusseme@Xdentsply.com", "pass") //
        .expect().statusCode(403).body(equalTo("Mauvaise combinaison email / mot de passe.")) //
        .when().post(server.buildEitherConfiguredOrLocalServerUrl("resources/compte/login"));
  }

  @Test
  public void should_logout() {
    Cookie cookie = given().cookie("email", new SpeedyFleetSecurity().encrypt("emmanuel.betito@jafim.fr")) //
        .expect().cookie("email", new SpeedyFleetSecurity().encrypt("deleted")) //
        .when().get(server.buildEitherConfiguredOrLocalServerUrl("resources/compte/logout")).getDetailedCookie("email");
    assertThat(cookie.getComment()).isEqualTo("\"Auth cookie\"");
    assertThat(cookie.getDomain()).isEqualTo("localhost");
    assertThat(cookie.getExpiryDate()).isNull();
    assertThat(cookie.getMaxAge()).isEqualTo(-1);
    assertThat(cookie.getName()).isEqualTo("email");
    assertThat(cookie.getPath()).isEqualTo("/");
    assertThat(cookie.getValue()).isEqualTo(new SpeedyFleetSecurity().encrypt("deleted"));
    assertThat(cookie.getVersion()).isEqualTo(1);
  }

  @Test
  public void with_auth_user_should_get_current_user() {
    Cookie cookie = given().cookie("email", new SpeedyFleetSecurity().encrypt("emmanuel.betito@jafim.fr")) //
        .expect().body("email", equalTo("emmanuel.betito@jafim.fr")) //
        .when().get(server.buildEitherConfiguredOrLocalServerUrl("resources/compte")).getDetailedCookie("email");
    assertThat(cookie).isNull();
  }
}
