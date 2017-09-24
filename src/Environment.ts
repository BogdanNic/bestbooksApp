

declare  var webpackGlobalVars:any;
export class Environment{

  static get URL_API(): any {
    return webpackGlobalVars.API_BASE;
  }
}
