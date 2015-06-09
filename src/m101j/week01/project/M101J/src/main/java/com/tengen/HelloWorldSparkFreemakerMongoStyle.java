package com.tengen;

import freemarker.template.Configuration;
import freemarker.template.Template;
import spark.Request;
import spark.Response;
import spark.Route;
import spark.Spark;

import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;

import java.net.UnknownHostException;

public class HelloWorldSparkFreemakerMongoStyle {
    public static void main(String[] args)  throws UnknownHostException {
        final Configuration configuration = new Configuration();
        configuration.setClassForTemplateLoading(
                HelloWorldSparkFreemarkerStyle.class, "/");
      
        MongoClient client =
	                new MongoClient(new ServerAddress("localhost", 27017));
        DB database = client.getDB("course");
        final DBCollection collection = database.getCollection("hello");
            
	    Spark.get(new Route("/") {
        @Override
        public Object handle(final Request request,
                             final Response response) {
        	StringWriter writer = new StringWriter();
                try {
                    Template helloTemplate = configuration.getTemplate("hello.ftl");

                    DBObject document = collection.findOne();
                    
                    //Map<String, Object> helloMap = new HashMap<String, Object>();
                    //helloMap.put("name", "Freemarker");
                    //helloTemplate.process(helloMap, writer);
                    
                    helloTemplate.process(document, writer);
                } catch (Exception e) {
                    halt(500);
                    e.printStackTrace();
                }
                return writer;
            }
        });
    }
}
