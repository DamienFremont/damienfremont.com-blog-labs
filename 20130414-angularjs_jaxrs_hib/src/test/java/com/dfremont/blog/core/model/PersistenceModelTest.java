package com.dfremont.blog.core.model;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

import org.junit.Test;

public class PersistenceModelTest {

	static EntityManager em = Persistence.createEntityManagerFactory("test")
			.createEntityManager();

	@Test
	public void testAddAndremove() {
		// arrange
		Todo ent = new Todo("Laver le linge", false, "Damien");
		assertEquals(0, em.createNamedQuery("findAll", Todo.class)
				.getResultList().size());
		// act
		em.getTransaction().begin();
		try {
			em.persist(ent);
			em.getTransaction().commit();
		} catch (Exception e) {
			em.getTransaction().rollback();
			fail();
		}
		// assert
		assertEquals(1, em.createNamedQuery("findAll", Todo.class)
				.getResultList().size());
		// (clean)
		em.remove(ent);
	}
}
