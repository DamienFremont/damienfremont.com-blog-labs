package com.damienfremont.blog;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import static javax.ws.rs.core.Response.Status.ACCEPTED;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Path("/status")
public class StatusService {

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public Response ping() {
		return Response
				.status(ACCEPTED)
				.build();
	}

//	@GET
//	@Path("details")
//    @Produces(MediaType.APPLICATION_JSON)
//	public StatusModel details() {
//		return new StatusModel(
//				"OK", 
//				new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date()));
//	}
//	
//	class StatusModel implements Serializable {
//		private static final long serialVersionUID = 9167120287441116359L;
//		public String value;
//		public StatusModel(String value, String date) {
//			super();
//			this.value = value;
//			this.date = date;
//		}
//		public String date;
//	}

}