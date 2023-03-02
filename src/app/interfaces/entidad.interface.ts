import { TipoDocumento } from '@interfaces/tipo-documento.interface';
import { TipoContribuyente } from "@interfaces/tipo-contribuyente.interface";

export interface Entidad {
  id_entidad: number;
  tipo_documento: TipoDocumento;
  nro_documento: string;
  razon_social: string;
  nombre_comercial?: string;
  tipo_contribuyente: TipoContribuyente;
  direccion?: string;
  telefono?: string;
  estado: boolean;
}
