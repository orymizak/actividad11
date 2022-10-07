package com.example.actividad11.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.actividad11.service.CuentasService;
import com.example.actividad11.Entity.CuentasEntity;

import java.util.Optional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/cuentas")
public class CuentaController {

    @Autowired
    private final CuentasService cuentasService;    

    public CuentaController(CuentasService cuentasService) {
        this.cuentasService = cuentasService;
    }

    @GetMapping
    public List<CuentasEntity> findAllCuentas() {
        return cuentasService.findAllCuentas();
    }

    @GetMapping("/{id}")
    public Optional<CuentasEntity> findCuentaById(@PathVariable("id") Long id) {
        return cuentasService.findCuentaById(id);
    }

    @PostMapping
    public CuentasEntity saveCuenta(@RequestBody CuentasEntity cuentaEntity) {
        return cuentasService.saveCuenta(cuentaEntity);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> updateCuenta(@PathVariable("id") Long id, @RequestBody CuentasEntity cuentaEntity) {
        Optional<CuentasEntity> cuentaGET = cuentasService.findCuentaById(id);
        Map<String, Boolean> response = new HashMap<>();

        response.put("updated", Boolean.FALSE);

        if (!cuentaGET.isEmpty()) {
            cuentaEntity.setId(cuentaGET.get().getId());
            cuentasService.updateCuenta(cuentaEntity);
            response.put("updated", Boolean.TRUE);
        }

        return ResponseEntity.ok(response);  
    }


    @PatchMapping("/{id}")
    public CuentasEntity parcialUpdateCuenta(@PathVariable("id") Long id, @RequestBody CuentasEntity cuentaEntity) {
        cuentaEntity.setId(cuentasService.findCuentaById(id).get().getId());
        return cuentasService.parcialUpdateCuenta(cuentaEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCuenta(@PathVariable("id") Long id) {
        cuentasService.deleteCuenta(id);   
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);     
    }

}
