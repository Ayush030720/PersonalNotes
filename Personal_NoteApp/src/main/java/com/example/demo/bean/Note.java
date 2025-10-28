package com.example.demo.bean;

import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Notes")
public class Note {
	 @Id
	    private String id;
	    private String title;
	    private String content;
}
