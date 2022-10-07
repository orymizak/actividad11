package com.example.actividad11.service.impl;

import com.example.actividad11.repository.CuentasRepository;
import com.example.actividad11.service.CuentasService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

import com.example.actividad11.Entity.CuentasEntity;

import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;

@Service
public class CuentasServiceImpl implements CuentasService {

    private final CuentasRepository cuentasRepository;

    public CuentasServiceImpl(CuentasRepository cuentasRepository) {
        this.cuentasRepository = cuentasRepository;
    }

    @Override
    public List<CuentasEntity> findAllCuentas() {
        return cuentasRepository.findAll();
    }

    @Override
    public Optional<CuentasEntity> findCuentaById(Long id) {
        return cuentasRepository.findById(id);
    }

    @Override
    public CuentasEntity saveCuenta(CuentasEntity cuentaEntity) {
        return cuentasRepository.save(cuentaEntity);
    }

    @Override
    public CuentasEntity updateCuenta(@RequestBody CuentasEntity cuentaEntity) {
        return cuentasRepository.save(cuentaEntity);
    }

    @Override
    public CuentasEntity parcialUpdateCuenta(CuentasEntity cuentaEntity) {
        return cuentasRepository.save(cuentaEntity);
    }

    @Override
    public void deleteCuenta(Long id) {
        cuentasRepository.deleteById(id);
    }
    
}
