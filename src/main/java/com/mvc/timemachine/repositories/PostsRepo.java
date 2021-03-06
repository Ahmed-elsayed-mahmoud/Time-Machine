package com.mvc.timemachine.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.mvc.timemachine.models.Post;


@Repository
public interface PostsRepo extends JpaRepository<Post, Long>{

	@Query("SELECT p FROM Post p LEFT JOIN FETCH p.era WHERE p.era.id = :eraId ORDER BY p.date DESC")
	public List<Post> getsAllPostsByEraId(@Param("eraId")Long eraId);
}
