import { Injectable, signal } from '@angular/core';
import { Ubicacion } from '../../model/Ubicacion';
import { ApiService } from '../api-service';

@Injectable({
  providedIn: 'root',
})
export class ServiceUbicacionControl {

  ubicaciones = signal<Ubicacion[]>([]);
  ubicacion = {} as Ubicacion;
  textoTitutlo:string=""
  titulo: boolean = true;
  agegaTituloExtra:boolean= false;
  botonOrigen:boolean=false;
  botonLlamado:boolean = true;

  constructor(private api: ApiService) { }


  ubicacionObjeto(ubicacion: Ubicacion): Ubicacion {

    ubicacion = {
      idUbicacion: ubicacion.idUbicacion ?? null,
      ciudadEstadoUbicacion:ubicacion.ciudadEstadoUbicacion ?? '',
      calleUbicacion: ubicacion.calleUbicacion ?? '',
      coloniaUbicacion: ubicacion.coloniaUbicacion ?? '',
      delegacionMunicipioUbicacion: ubicacion.delegacionMunicipioUbicacion ?? '',
      numeroInteriorUbicacion: ubicacion.numeroInteriorUbicacion ?? '',
      numeroExteriorUbicacion: ubicacion.numeroExteriorUbicacion ?? '',
      descripcionUbicacion: ubicacion.descripcionUbicacion ?? '',
      notasAdicionalesUbicacion: ubicacion.notasAdicionalesUbicacion ?? '',
      cpUbicacion: ubicacion.cpUbicacion ?? ''

    }

    return ubicacion;
  }

  listaDelegacion(): any[] {

    var delegaciones = [
      { name: 'Álvaro Obregón', value: '1' },
      { name: 'Azcapotzalco', value: '2' },
      { name: 'Benito Juárez', value: '3' },
      { name: 'Coyoacán', value: '4' },
      { name: 'Cuajimalpa de Morelos', value: '5' },
      { name: 'Cuauhtémoc', value: '6' },
      { name: 'Gustavo A. Madero', value: '7' },
      { name: 'Iztacalco', value: '8' },
      { name: 'Iztapalapa', value: '9' },
      { name: 'La Magdalena Contreras', value: '10' },
      { name: 'Miguel Hidalgo', value: '11' },
      { name: 'Milpa Alta', value: '12' },
      { name: 'Tláhuac', value: '13' },
      { name: 'Tlalpan', value: '14' },
      { name: 'Venustiano Carranza', value: '15' },
      { name: 'Xochimilco', value: '16' }
    ]

    return delegaciones;
  }

  listaCiudadesEstados(): any[]{

    const ciudadesEstados = [
    // Estados Principales
    { name: 'Aguascalientes', value: 'AGS' },
    { name: 'Baja California', value: 'BC' },
    { name: 'Chihuahua', value: 'CHIH' },
    { name: 'Ciudad de México', value: 'CDMX' },
    { name: 'Coahuila', value: 'COAH' },
    { name: 'Estado de México', value: 'EDOMEX' },
    { name: 'Guanajuato', value: 'GTO' },
    { name: 'Jalisco', value: 'JAL' },
    { name: 'Nuevo León', value: 'NL' },
    { name: 'Puebla', value: 'PUE' },
    { name: 'Querétaro', value: 'QRO' },
    { name: 'Quintana Roo', value: 'QR' },
    { name: 'San Luis Potosí', value: 'SLP' },
    { name: 'Sinaloa', value: 'SIN' },
    { name: 'Sonora', value: 'SON' },
    { name: 'Tabasco', value: 'TAB' },
    { name: 'Veracruz', value: 'VER' },
    { name: 'Yucatán', value: 'YUC' },

    // Ciudades Principales (No Capitales o de alto impacto)
    { name: 'Cancún', value: 'CAN' },
    { name: 'Guadalajara', value: 'GDL' },
    { name: 'Monterrey', value: 'MTY' },
    { name: 'Tijuana', value: 'TIJ' },
    { name: 'León', value: 'LEON' },
    { name: 'Ciudad Juárez', value: 'CJS' },
    { name: 'Torreón', value: 'TOR' },
    { name: 'Toluca', value: 'TOL' }
  ];

  // Opcional: Ordenar alfabéticamente por nombre
  return ciudadesEstados.sort((a, b) => a.name.localeCompare(b.name));

  }

}
