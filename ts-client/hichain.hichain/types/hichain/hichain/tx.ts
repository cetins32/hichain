/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "hichain.hichain";

export interface MsgCreatePost {
  creator: string;
  sYSTakipNo: string;
  aD: string;
  sOYAD: string;
  dOGUMTARIHI: string;
  cINSIYET: string;
  aDRESBILGISI: string;
  tELEFONNUMARASI: string;
  hASTATIPI: string;
  mUAYENEBASLANGICTARIHI: string;
  mUAYENEBITISTARIHI: string;
  tANITURU: string;
  iCD10: string;
  rECETETARIHI: string;
  rECETENUMARASI: string;
  rECETETURU: string;
  hEKIMKIMLIKNUMARASI: string;
  iLACBARKODU: string;
  iLACADI: string;
  kUTUADETI: string;
  iLACKULLANIMSEKLI: string;
  iLACKULLANIMSAYISI: string;
  iLACKULLANIMDOZU: string;
  iLACKULLANIMPERIYODU: string;
}

export interface MsgCreatePostResponse {
}

function createBaseMsgCreatePost(): MsgCreatePost {
  return {
    creator: "",
    sYSTakipNo: "",
    aD: "",
    sOYAD: "",
    dOGUMTARIHI: "",
    cINSIYET: "",
    aDRESBILGISI: "",
    tELEFONNUMARASI: "",
    hASTATIPI: "",
    mUAYENEBASLANGICTARIHI: "",
    mUAYENEBITISTARIHI: "",
    tANITURU: "",
    iCD10: "",
    rECETETARIHI: "",
    rECETENUMARASI: "",
    rECETETURU: "",
    hEKIMKIMLIKNUMARASI: "",
    iLACBARKODU: "",
    iLACADI: "",
    kUTUADETI: "",
    iLACKULLANIMSEKLI: "",
    iLACKULLANIMSAYISI: "",
    iLACKULLANIMDOZU: "",
    iLACKULLANIMPERIYODU: "",
  };
}

export const MsgCreatePost = {
  encode(message: MsgCreatePost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sYSTakipNo !== "") {
      writer.uint32(18).string(message.sYSTakipNo);
    }
    if (message.aD !== "") {
      writer.uint32(26).string(message.aD);
    }
    if (message.sOYAD !== "") {
      writer.uint32(34).string(message.sOYAD);
    }
    if (message.dOGUMTARIHI !== "") {
      writer.uint32(42).string(message.dOGUMTARIHI);
    }
    if (message.cINSIYET !== "") {
      writer.uint32(50).string(message.cINSIYET);
    }
    if (message.aDRESBILGISI !== "") {
      writer.uint32(58).string(message.aDRESBILGISI);
    }
    if (message.tELEFONNUMARASI !== "") {
      writer.uint32(66).string(message.tELEFONNUMARASI);
    }
    if (message.hASTATIPI !== "") {
      writer.uint32(74).string(message.hASTATIPI);
    }
    if (message.mUAYENEBASLANGICTARIHI !== "") {
      writer.uint32(82).string(message.mUAYENEBASLANGICTARIHI);
    }
    if (message.mUAYENEBITISTARIHI !== "") {
      writer.uint32(90).string(message.mUAYENEBITISTARIHI);
    }
    if (message.tANITURU !== "") {
      writer.uint32(98).string(message.tANITURU);
    }
    if (message.iCD10 !== "") {
      writer.uint32(106).string(message.iCD10);
    }
    if (message.rECETETARIHI !== "") {
      writer.uint32(114).string(message.rECETETARIHI);
    }
    if (message.rECETENUMARASI !== "") {
      writer.uint32(122).string(message.rECETENUMARASI);
    }
    if (message.rECETETURU !== "") {
      writer.uint32(130).string(message.rECETETURU);
    }
    if (message.hEKIMKIMLIKNUMARASI !== "") {
      writer.uint32(138).string(message.hEKIMKIMLIKNUMARASI);
    }
    if (message.iLACBARKODU !== "") {
      writer.uint32(146).string(message.iLACBARKODU);
    }
    if (message.iLACADI !== "") {
      writer.uint32(154).string(message.iLACADI);
    }
    if (message.kUTUADETI !== "") {
      writer.uint32(162).string(message.kUTUADETI);
    }
    if (message.iLACKULLANIMSEKLI !== "") {
      writer.uint32(170).string(message.iLACKULLANIMSEKLI);
    }
    if (message.iLACKULLANIMSAYISI !== "") {
      writer.uint32(178).string(message.iLACKULLANIMSAYISI);
    }
    if (message.iLACKULLANIMDOZU !== "") {
      writer.uint32(186).string(message.iLACKULLANIMDOZU);
    }
    if (message.iLACKULLANIMPERIYODU !== "") {
      writer.uint32(194).string(message.iLACKULLANIMPERIYODU);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sYSTakipNo = reader.string();
          break;
        case 3:
          message.aD = reader.string();
          break;
        case 4:
          message.sOYAD = reader.string();
          break;
        case 5:
          message.dOGUMTARIHI = reader.string();
          break;
        case 6:
          message.cINSIYET = reader.string();
          break;
        case 7:
          message.aDRESBILGISI = reader.string();
          break;
        case 8:
          message.tELEFONNUMARASI = reader.string();
          break;
        case 9:
          message.hASTATIPI = reader.string();
          break;
        case 10:
          message.mUAYENEBASLANGICTARIHI = reader.string();
          break;
        case 11:
          message.mUAYENEBITISTARIHI = reader.string();
          break;
        case 12:
          message.tANITURU = reader.string();
          break;
        case 13:
          message.iCD10 = reader.string();
          break;
        case 14:
          message.rECETETARIHI = reader.string();
          break;
        case 15:
          message.rECETENUMARASI = reader.string();
          break;
        case 16:
          message.rECETETURU = reader.string();
          break;
        case 17:
          message.hEKIMKIMLIKNUMARASI = reader.string();
          break;
        case 18:
          message.iLACBARKODU = reader.string();
          break;
        case 19:
          message.iLACADI = reader.string();
          break;
        case 20:
          message.kUTUADETI = reader.string();
          break;
        case 21:
          message.iLACKULLANIMSEKLI = reader.string();
          break;
        case 22:
          message.iLACKULLANIMSAYISI = reader.string();
          break;
        case 23:
          message.iLACKULLANIMDOZU = reader.string();
          break;
        case 24:
          message.iLACKULLANIMPERIYODU = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePost {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      sYSTakipNo: isSet(object.sYSTakipNo) ? String(object.sYSTakipNo) : "",
      aD: isSet(object.aD) ? String(object.aD) : "",
      sOYAD: isSet(object.sOYAD) ? String(object.sOYAD) : "",
      dOGUMTARIHI: isSet(object.dOGUMTARIHI) ? String(object.dOGUMTARIHI) : "",
      cINSIYET: isSet(object.cINSIYET) ? String(object.cINSIYET) : "",
      aDRESBILGISI: isSet(object.aDRESBILGISI) ? String(object.aDRESBILGISI) : "",
      tELEFONNUMARASI: isSet(object.tELEFONNUMARASI) ? String(object.tELEFONNUMARASI) : "",
      hASTATIPI: isSet(object.hASTATIPI) ? String(object.hASTATIPI) : "",
      mUAYENEBASLANGICTARIHI: isSet(object.mUAYENEBASLANGICTARIHI) ? String(object.mUAYENEBASLANGICTARIHI) : "",
      mUAYENEBITISTARIHI: isSet(object.mUAYENEBITISTARIHI) ? String(object.mUAYENEBITISTARIHI) : "",
      tANITURU: isSet(object.tANITURU) ? String(object.tANITURU) : "",
      iCD10: isSet(object.iCD10) ? String(object.iCD10) : "",
      rECETETARIHI: isSet(object.rECETETARIHI) ? String(object.rECETETARIHI) : "",
      rECETENUMARASI: isSet(object.rECETENUMARASI) ? String(object.rECETENUMARASI) : "",
      rECETETURU: isSet(object.rECETETURU) ? String(object.rECETETURU) : "",
      hEKIMKIMLIKNUMARASI: isSet(object.hEKIMKIMLIKNUMARASI) ? String(object.hEKIMKIMLIKNUMARASI) : "",
      iLACBARKODU: isSet(object.iLACBARKODU) ? String(object.iLACBARKODU) : "",
      iLACADI: isSet(object.iLACADI) ? String(object.iLACADI) : "",
      kUTUADETI: isSet(object.kUTUADETI) ? String(object.kUTUADETI) : "",
      iLACKULLANIMSEKLI: isSet(object.iLACKULLANIMSEKLI) ? String(object.iLACKULLANIMSEKLI) : "",
      iLACKULLANIMSAYISI: isSet(object.iLACKULLANIMSAYISI) ? String(object.iLACKULLANIMSAYISI) : "",
      iLACKULLANIMDOZU: isSet(object.iLACKULLANIMDOZU) ? String(object.iLACKULLANIMDOZU) : "",
      iLACKULLANIMPERIYODU: isSet(object.iLACKULLANIMPERIYODU) ? String(object.iLACKULLANIMPERIYODU) : "",
    };
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sYSTakipNo !== undefined && (obj.sYSTakipNo = message.sYSTakipNo);
    message.aD !== undefined && (obj.aD = message.aD);
    message.sOYAD !== undefined && (obj.sOYAD = message.sOYAD);
    message.dOGUMTARIHI !== undefined && (obj.dOGUMTARIHI = message.dOGUMTARIHI);
    message.cINSIYET !== undefined && (obj.cINSIYET = message.cINSIYET);
    message.aDRESBILGISI !== undefined && (obj.aDRESBILGISI = message.aDRESBILGISI);
    message.tELEFONNUMARASI !== undefined && (obj.tELEFONNUMARASI = message.tELEFONNUMARASI);
    message.hASTATIPI !== undefined && (obj.hASTATIPI = message.hASTATIPI);
    message.mUAYENEBASLANGICTARIHI !== undefined && (obj.mUAYENEBASLANGICTARIHI = message.mUAYENEBASLANGICTARIHI);
    message.mUAYENEBITISTARIHI !== undefined && (obj.mUAYENEBITISTARIHI = message.mUAYENEBITISTARIHI);
    message.tANITURU !== undefined && (obj.tANITURU = message.tANITURU);
    message.iCD10 !== undefined && (obj.iCD10 = message.iCD10);
    message.rECETETARIHI !== undefined && (obj.rECETETARIHI = message.rECETETARIHI);
    message.rECETENUMARASI !== undefined && (obj.rECETENUMARASI = message.rECETENUMARASI);
    message.rECETETURU !== undefined && (obj.rECETETURU = message.rECETETURU);
    message.hEKIMKIMLIKNUMARASI !== undefined && (obj.hEKIMKIMLIKNUMARASI = message.hEKIMKIMLIKNUMARASI);
    message.iLACBARKODU !== undefined && (obj.iLACBARKODU = message.iLACBARKODU);
    message.iLACADI !== undefined && (obj.iLACADI = message.iLACADI);
    message.kUTUADETI !== undefined && (obj.kUTUADETI = message.kUTUADETI);
    message.iLACKULLANIMSEKLI !== undefined && (obj.iLACKULLANIMSEKLI = message.iLACKULLANIMSEKLI);
    message.iLACKULLANIMSAYISI !== undefined && (obj.iLACKULLANIMSAYISI = message.iLACKULLANIMSAYISI);
    message.iLACKULLANIMDOZU !== undefined && (obj.iLACKULLANIMDOZU = message.iLACKULLANIMDOZU);
    message.iLACKULLANIMPERIYODU !== undefined && (obj.iLACKULLANIMPERIYODU = message.iLACKULLANIMPERIYODU);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePost>, I>>(object: I): MsgCreatePost {
    const message = createBaseMsgCreatePost();
    message.creator = object.creator ?? "";
    message.sYSTakipNo = object.sYSTakipNo ?? "";
    message.aD = object.aD ?? "";
    message.sOYAD = object.sOYAD ?? "";
    message.dOGUMTARIHI = object.dOGUMTARIHI ?? "";
    message.cINSIYET = object.cINSIYET ?? "";
    message.aDRESBILGISI = object.aDRESBILGISI ?? "";
    message.tELEFONNUMARASI = object.tELEFONNUMARASI ?? "";
    message.hASTATIPI = object.hASTATIPI ?? "";
    message.mUAYENEBASLANGICTARIHI = object.mUAYENEBASLANGICTARIHI ?? "";
    message.mUAYENEBITISTARIHI = object.mUAYENEBITISTARIHI ?? "";
    message.tANITURU = object.tANITURU ?? "";
    message.iCD10 = object.iCD10 ?? "";
    message.rECETETARIHI = object.rECETETARIHI ?? "";
    message.rECETENUMARASI = object.rECETENUMARASI ?? "";
    message.rECETETURU = object.rECETETURU ?? "";
    message.hEKIMKIMLIKNUMARASI = object.hEKIMKIMLIKNUMARASI ?? "";
    message.iLACBARKODU = object.iLACBARKODU ?? "";
    message.iLACADI = object.iLACADI ?? "";
    message.kUTUADETI = object.kUTUADETI ?? "";
    message.iLACKULLANIMSEKLI = object.iLACKULLANIMSEKLI ?? "";
    message.iLACKULLANIMSAYISI = object.iLACKULLANIMSAYISI ?? "";
    message.iLACKULLANIMDOZU = object.iLACKULLANIMDOZU ?? "";
    message.iLACKULLANIMPERIYODU = object.iLACKULLANIMPERIYODU ?? "";
    return message;
  },
};

function createBaseMsgCreatePostResponse(): MsgCreatePostResponse {
  return {};
}

export const MsgCreatePostResponse = {
  encode(_: MsgCreatePostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreatePostResponse {
    return {};
  },

  toJSON(_: MsgCreatePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePostResponse>, I>>(_: I): MsgCreatePostResponse {
    const message = createBaseMsgCreatePostResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePost = this.CreatePost.bind(this);
  }
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("hichain.hichain.Msg", "CreatePost", data);
    return promise.then((data) => MsgCreatePostResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
