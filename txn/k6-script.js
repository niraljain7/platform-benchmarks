// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";
import "./libs/shim/urijs.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  environment: {
    BaseURL: "qa3.nslhub.com",
    IamURL: "https://qaiam.nslhub.com",
    SuperAdminTenant: "Super-Admin",
    TenantName: "apiqa0504",
    TenantAdmin: "admin@nslhub.com",
    AdminPassword: "admin",
    CCORoleId: 1841833683818,
    RoleCCO: "CCO",
    UserCCOManager: "userccomanager",
    UserCCO: "usercco",
    UserCCOId: 322589991331,
    UserCCO1: "usercco1",
    UserCCO1Id: 1972120016659,
    CCHRoleId: 234529237640,
    RoleCCH: "CCH",
    UserCCH: "usercch",
    RoleCCA: "CCA",
    UserCCA: "usercca",
    Password: "test",
    BearerToken: "undefined undefined",
    TenantName2: "apiqaei0504",
    TenantAdmin2: "admin@nslhub.com",
    AdminPassword2: "admin",
    DsdFileStoreURL: "https://ava-nlg-dev.nslhub.com",
    RefreshToken: null,
    WaitTime: 30000,
    NUMBER: "",
    COUNT: "",
    UserCCOEmailId: "usercco@nslhub.com",
    UserCCO1EmailId: "usercco1@nslhub.com",
    UserCCOManagerEmailId: "userccomanager@nslhub.com",
    UserCCAId: 2044956951239,
    UserCCA1Id: 2043386291967,
    UserCCA1: "usercca1",
    CCARoleId: 368848764661,
    UserCCOManagerId: 2119243203126,
    UserCCH1: "usercch1",
    OuCCO: "oucco",
    OuCCOId: "191876919025",
    UserOuCCO: "useroucco",
    UserOuCCO1: "useroucco1",
    UserOuCCOId: 1657502426387,
    UserOuCCOId1: 668079088379,
    GN: "",
    SolutionPublisher: "SolutionPublisher",
    SolutionPublisherId: 824925532392,
    TenantNameStage: "apiqa0504stage",
    TenantNameProd: "apiqa0504prod",
    TenantNameStageClientId: "apiqa0504_staging",
    UserCCHId: 398151345508,
    TraceAuditRole: "auditdata",
    TraceAuditRoleId: 1873250222640,
    AuditDesigner: "auditdesigner",
    AuditDesignerId: 1139785560613,
    AuditReviewer: "auditreviewer",
    AuditReviewerId: 996441711937,
    AuditDesignerEmailId: "auditdesigner@nslhub.com",
    SuperAdminUserName: "platformadmin@nslhub.com",
    SuperAdminPassword: "padmin@123",
    SaasTenantName: "apiqasaas0802",
    SaasUserCCO: "usercco",
    SaasUserCCOId: "1173118793932",
    SaasTenantId: 28606,
    SuperAdminUserId: "-827185515",
    SuperAdminUser: "platformadmin",
    SaasRoleCCO: "CCO",
    SaasTenantAdmin: "admin@nslhub.com",
    SaasUserCCH: "usercch",
    SaasUserCCHId: "933373429905",
    SaasRoleCCH: "CCH",
    SaasUserCCA: "usercca",
    SaasUserCCAId: "1588750292491",
    SaasRoleCCA: "CCA",
    RoleManager: "Manager",
    ManagerRoleId: 829265664407,
    RoleEmployee: "Employee",
    EmployeeRoleId: 2040409113899,
    RoleFinance: "Finance",
    FinanceRoleId: 1764637492961,
    TenantAdminId: 894878720178,
    Tenant2AdminId: 1597011094011,
    T2UserCCOId: 1386113498793,
    T2CCORoleId: 239407227356,
    EmployeeUser: "employeeuser",
    EmployeeUserId: 1917645633263,
    FinanceUser: "financeuser",
    FinanceUserId: 820077520635,
    FinanceUser1: "financeuser1",
    FinanceUserId1: "1192769182955",
    EmployeeUser1: "employeeuser1",
    EmployeeUserId1: "1228497924811",
    ManagerUser: "manageruser",
    ManagerUserId: 1732001198107,
    ManagerUser1: "manageruser1",
    ManagerUserId1: "897141596215",
    UserCCHEmailId: "usercch@nslhub.com",
    UserCCAEmailId: "usercca@nslhub.com",
    UserCCA1EmailId: "usercca1@nslhub.com",
    UserCCH1EmailId: "usercch1@nslhub.com",
    UserCCH1Id: 632745185759,
    SAASAdminUserId: "242233047416",
    SaasUserCCO1Id: "464692553728",
    SaasUserCCOManagerId: "202094916017",
    ManagerUser1Id: 1989195344420,
    FinanceUser1Id: 1829479253660,
    EmployeeUser1Id: 1178159858335,
    T2UserCCO1Id: 878542497800,
    StageAdmin: "stageadmin@nslhub.com",
    UserCCC: "userccc",
    UserCCC1: "userccc1",
    UserCCCManager: "usercccmanager",
    RoleSolutionCustomizer: "SolutionCustomizer",
    UserCCCId: "668849564311",
    UserCCC1Id: "1607519294012",
    SolutionCustomizerRoleId: "639989182448",
    T3UserCCO1Id: 405650278408,
    Tenant3AdminId: 982435399574,
    T3UserCCOId: 1424682699760,
    T3CCORoleId: 129071126100,
    TenantName3: "apiqa3ten0604",
    REVIEW_WAITTIME: "5000"
  }
});

export default function() {
  postman[Request]({
    name: "Login as usercco",
    id: "b5e1aea5-1bd7-4c48-9b03-38c72a2e460b",
    method: "POST",
    address:
      "{{IamURL}}/auth/realms/{{TenantName}}/protocol/openid-connect/token",
    data: {
      client_id: "{{TenantName}}",
      grant_type: "password",
      password: "{{Password}}",
      username: "{{UserCCO}}"
    },
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept-Language": "en"
    },
    pre() {
      //pm.variables.clear();

      pm.variables.set(
        "RandomNumber",
        new Date()
          .toISOString()
          .replace(/[^0-9]/g, "")
          .slice(0, -3) +
          "" +
          Math.floor(Math.random() * 100000 + 1)
      );

      // Solution Development

      pm.variables.set(
        "BookName",
        "BasicBook" + pm.variables.get("RandomNumber")
      );
      pm.variables.set(
        "SolutionName",
        "BasicSolution" + pm.variables.get("RandomNumber")
      );
      pm.variables.set("CCORoleId", pm.variables.get("CCORoleId"));
      pm.variables.set("RoleCCO", pm.variables.get("RoleCCO"));

      pm.variables.set(
        "CuName1",
        "Input1_BasicSolution " + pm.variables.get("RandomNumber")
      );
      pm.variables.set(
        "EntityName1",
        "enter_details1" + pm.variables.get("RandomNumber")
      );
      pm.variables.set("AttributeName11", "Name");
      pm.variables.set("AttributeName12", "Age");

      pm.variables.set(
        "CuName2",
        "Input2_BasicSolution " + pm.variables.get("RandomNumber")
      );
      pm.variables.set(
        "EntityName2",
        "enter_details2" + pm.variables.get("RandomNumber")
      );
      pm.variables.set("AttributeName21", "Address");
      pm.variables.set("AttributeName22", "Pin Code");

      // Solution Execution

      pm.variables.set(
        "AttributeValue11",
        "Ramya " + pm.variables.get("RandomNumber")
      );
      pm.variables.set("AttributeValue12", pm.variables.get("RandomNumber"));

      pm.variables.set(
        "AttributeValue21",
        "Hyderabad " + pm.variables.get("RandomNumber")
      );
      pm.variables.set("AttributeValue22", pm.variables.get("RandomNumber"));
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
      });

      pm.environment.set(
        "BearerToken",
        pm.response.json().token_type + " " + pm.response.json().access_token
      );
      pm.environment.set("RefreshToken", pm.response.json().refresh_token);
    }
  });

  postman[Request]({
    name: "Start Execution of Solution-(BasicSolution)",
    id: "79baf9d6-cf45-4f3c-9a0b-7c724e27f7cf",
    method: "POST",
    address: "https://{{TenantName}}.{{BaseURL}}/dsd-orch/execute/change-unit",
    data: '{\r\n\t"gsiId": 758040314799\r\n}',
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization: "{{BearerToken}}",
      traceparent: "00-42817721b6410b73e2d7a6a479b48553-59477548f520c665-01",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
      "Content-Type": "application/json",
      "Accept-Language": "en"
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
      });
      pm.variables.set("TransactionId", pm.response.json().result.transId);
      pm.variables.set("TriggerCuId1", pm.response.json().result.currentCU.id);
    }
  });

  postman[Request]({
    name: "Resume transaction - From ManagerUser",
    id: "b248226a-fd76-47b7-a3a3-633f606ac5ef",
    method: "POST",
    address: "https://{{TenantName}}.{{BaseURL}}/dsd-orch/execute/resume",
    data:
      '{\r\n    "gsiContextualId": null,\r\n    "transId": "{{TransactionId}}",\r\n    "gsiId": 758040314799,\r\n    "triggerCuId": {{TriggerCuId1}}\r\n}',
    headers: {
      "accept-language": "en",
      authorization: "{{BearerToken}}",
      "content-type": "application/json",
      accept: "application/json, text/plain, */*",
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "cors"
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
      });
    }
  });

  postman[Request]({
    name: "Get All transactions",
    id: "6e435b33-c1f6-4087-b998-a1beca662f36",
    method: "GET",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/txn/transactions/all?containerCUName=&pageNo=0&pageSize=10",
    headers: {
      authority: "apiqa1607.qa3.nslhub.com",
      "sec-ch-ua":
        '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
      traceparent: "00-c696bcf14e71d6098c91699fc3322e76-230e863a555291a6-01",
      "accept-language": "en",
      "sec-ch-ua-mobile": "?0",
      authorization: "{{BearerToken}}",
      accept: "application/json, text/plain, */*",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      referer: "https://apiqa1607.qa3.nslhub.com/mylibrary/pending-transactions"
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
      });
    }
  });
}