package com.example.actividad11.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.actividad11.Entity.CuentasEntity;

@Repository
public interface CuentasRepository extends JpaRepository<CuentasEntity, Long> {
    //
}
