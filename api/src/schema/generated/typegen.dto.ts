/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Post: { // root type
    _id?: string | null; // String
    author_id?: string | null; // String
    author_username?: string | null; // String
    content?: string | null; // String
    title?: string | null; // String
  }
  Query: {};
  SignIn: { // root type
    _id?: string | null; // String
    email?: string | null; // String
    token?: string | null; // String
    username?: string | null; // String
  }
  SignUp: { // root type
    _id?: string | null; // String
    email?: string | null; // String
    password?: string | null; // String
    username?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    destroypost: NexusGenRootTypes['Post'] | null; // Post
    newpost: NexusGenRootTypes['Post'] | null; // Post
    patchpost: NexusGenRootTypes['Post'] | null; // Post
    signin: NexusGenRootTypes['SignIn'] | null; // SignIn
    signup: NexusGenRootTypes['SignUp'] | null; // SignUp
  }
  Post: { // field return type
    _id: string | null; // String
    author_id: string | null; // String
    author_username: string | null; // String
    content: string | null; // String
    title: string | null; // String
  }
  Query: { // field return type
    findposts: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
  }
  SignIn: { // field return type
    _id: string | null; // String
    email: string | null; // String
    token: string | null; // String
    username: string | null; // String
  }
  SignUp: { // field return type
    _id: string | null; // String
    email: string | null; // String
    password: string | null; // String
    username: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    destroypost: 'Post'
    newpost: 'Post'
    patchpost: 'Post'
    signin: 'SignIn'
    signup: 'SignUp'
  }
  Post: { // field return type name
    _id: 'String'
    author_id: 'String'
    author_username: 'String'
    content: 'String'
    title: 'String'
  }
  Query: { // field return type name
    findposts: 'Post'
  }
  SignIn: { // field return type name
    _id: 'String'
    email: 'String'
    token: 'String'
    username: 'String'
  }
  SignUp: { // field return type name
    _id: 'String'
    email: 'String'
    password: 'String'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    destroypost: { // args
      id: string; // String!
    }
    newpost: { // args
      content: string; // String!
      title: string; // String!
    }
    patchpost: { // args
      content: string; // String!
      id: string; // String!
      title: string; // String!
    }
    signin: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      password: string; // String!
      username: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}