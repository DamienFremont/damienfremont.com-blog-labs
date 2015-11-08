package com.damienfremont.blog;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("/datas")
public class ServiceJAXRS {

  @Path("/values")
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public List<List> getAll() {
    return mockDatas;
  }
  
  @Path("/values-big")
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public List<List> getAllReal() {
    // MOCK: UPDATE FOR REAL TIME
    mockDatasReal.remove(0);
    mockStart = mockStart + mockInterval;
    mockDatasReal.add(newValue(mockStart));
    return mockDatasReal;
  }
  
  // MOCK
  // MOCK: INIT
  static ArrayList<List> mockDatas = new ArrayList<>();
  static {
    long mockStart = 1025409600000L;
    long mockInterval = 2592000000L;
   for (int i = 1; i < 10; i++) {
     mockStart = mockStart + mockInterval;
     mockDatas.add(newValue(mockStart));
    }
  }
  
  static ArrayList<List> mockDatasReal = new ArrayList<>();
  static long mockStart = 1;
  static long mockInterval = 1;
  static {
    for (int i = 1; i < 50; i++) {
      mockStart = mockStart + mockInterval;
      mockDatasReal.add(newValue(mockStart));
    }
  }
  private static ArrayList<Long> newValue(long start) {
    long randomNum = new Random().nextInt(50) + 1;
    ArrayList<Long> value = new ArrayList<>();
    value.add(start);
    value.add(randomNum);
    return value;
  }

}