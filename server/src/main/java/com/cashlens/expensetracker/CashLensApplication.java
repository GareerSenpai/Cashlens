package com.cashlens.expensetracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class CashLensApplication {

	public static void main(String[] args) {
		// Load .env variables into system properties before Spring starts
		Dotenv dotenv = Dotenv.load();
		dotenv.entries().forEach(e -> System.setProperty(e.getKey(), e.getValue()));

		SpringApplication.run(CashLensApplication.class, args);
	}

}
