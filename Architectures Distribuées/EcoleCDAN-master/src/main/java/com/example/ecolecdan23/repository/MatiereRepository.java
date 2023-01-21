package com.example.ecolecdan23.repository;

import com.example.ecolecdan23.entity.MatiereEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatiereRepository extends JpaRepository<MatiereEntity, Integer> {
}
