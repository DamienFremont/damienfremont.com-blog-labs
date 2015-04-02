package com.damienfremont.blog;

import java.util.List;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

@WebService
@SOAPBinding(style = Style.RPC)
public interface PersonService {

	@WebMethod
	public String createPerson(PersonModel person);

	@WebMethod
	public PersonModel readPerson(Integer id);

	@WebMethod
	public List<PersonModel> readPersons();

	@WebMethod
	public void updatePerson(Integer id, PersonModel person);

	@WebMethod
	public void deletePerson(Integer id);
}