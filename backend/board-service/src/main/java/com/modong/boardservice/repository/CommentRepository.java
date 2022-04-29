package com.modong.boardservice.repository;

import com.modong.boardservice.entity.Board;
import com.modong.boardservice.entity.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CommentRepository extends JpaRepository<Comment, Long > {

    Page<Comment> findAllByDeletedIsFalse(Pageable pageable);

}
