package com.example.actividad11.service;

import com.example.actividad11.Entity.CuentasEntity;

import java.util.Optional;
import java.util.List;

public interface CuentasService {
    
    // GET /cuentas
    List<CuentasEntity> findAllCuentas();

    // GET /cuentas/1
    Optional<CuentasEntity> findCuentaById(Long id);

    // POST /cuentas
    CuentasEntity saveCuenta(CuentasEntity cuentaEntity);

    // PUT /cuentas/12
    CuentasEntity updateCuenta(CuentasEntity cuentaEntity);
    
    // PATCH /cuentas/12
    CuentasEntity parcialUpdateCuenta(CuentasEntity cuentaEntity);

    // DELETE /cuentas
    void deleteCuenta(Long id);

}
