// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";

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
    name: "Search the TXN in Adv Search - UserCCH",
    id: "ed482ca5-e172-4e9a-b6c1-cd26523d78ce",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/query/transaction/filtered-transactions",
    data:
      '{\r\n    "limit": 10,\r\n    "pageNumber": 0,\r\n    "queries": {\r\n        "gsiName": [\r\n            "{{SolutionName1}}"\r\n        ]\r\n    }\r\n}',
    headers: {
      "Accept-Language": "en",
      Authorization: "{{BearerToken}}"
    },
    pre() {
      setTimeout(() => {}, pm.variables.get("WaitTime") / 2);
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.response.to.have.status(200);
        pm.expect(pm.response.json().message).equals("Success");
        pm.expect(pm.response.json().result.content[0].containerCuName).to.eq(
          pm.variables.get("SolutionName1")
        );
        pm.expect(pm.response.json().result.content[0].transactionStatus).to.eq(
          "TRIGGERED"
        );
        pm.expect(pm.response.json().result.content[0].transactionId).to.eq(
          pm.variables.get("TransactionId")
        );

        pm.variables.set(
          "TransactionId",
          pm.response.json().result.content[0].transactionId
        );
        pm.variables.set(
          "GSIContextualId",
          pm.response.json().result.content[0].gsiContextualID
        );
      });
    }
  });

  postman[Request]({
    name: "Fetched Value with Name",
    id: "4372a6ad-986c-46a5-920b-6bd695e642a5",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/query/dynamic-search/txn-report",
    data:
      '{\r\n    "filters": [\r\n        {\r\n            "filterName": "gsiMasterId",\r\n            "filterValues": [\r\n                "{{SolutionId}}"\r\n            ]\r\n        },\r\n        {\r\n            "filterName": "nslDimensions.triggerCUId",\r\n            "filterValues": [\r\n                "{{TriggerCuId1}}"\r\n            ]\r\n        },\r\n        {\r\n            "filterName": "nslDimensions.entityName",\r\n            "filterValues": [\r\n                "{{EntityName1}}"\r\n            ]\r\n        },\r\n        {\r\n            "filterName": "nslDimensions.attributeName",\r\n            "filterValues": [\r\n                "{{AttributeName11}}"\r\n            ]\r\n        },\r\n        {\r\n            "filterName": "nslDimensions.attributeValue",\r\n            "filterValues": [\r\n                "{{AttributeValue11}}"\r\n            ]\r\n        }\r\n    ],\r\n    "groupBys": [\r\n        {\r\n            "groupByField": "nslDimensions.attributeValue"\r\n        }\r\n    ],\r\n    "responseFormat": "AGG_KEY_VALUE_FORMAT",\r\n    "queryType": "OR",\r\n    "timeRangeType": "DAILY"\r\n}',
    headers: {
      "Accept-Language": "en",
      Authorization: "{{BearerToken}}"
    },
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);

        pm.expect(pm.response.json().message).to.eq(
          "Fetched transaction results successfully"
        );
        pm.expect(
          pm.response.json().result.result.searchResults[
            pm.variables.get("AttributeValue11")
          ]
        ).to.not.eq(undefined);
      });
    }
  });

  postman[Request]({
    name: "Save the Widget - Widget1_Search",
    id: "49f100b9-69d7-44b5-9544-f7edeb8d4e69",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/query/dashboards/widget-all",
    data:
      '[\r\n    {\r\n        "dashboardId": "{{DashboardId}}",\r\n        "dashboardName": "{{DashboardName}}",\r\n        "moduleType": "bar",\r\n        "spaceWidgetLayout": "starter",\r\n        "widget": {\r\n            "additional": {\r\n                "additionalProp1": "",\r\n                "additionalProp2": "1",\r\n                "chartType": "timeSeries",\r\n                "dataset": "{{DatasetName}}",\r\n                "group": "{{GroupName}}",\r\n                "axesConfiguration": "totalCount",\r\n                "xaxisAttribute": "",\r\n                "yaxisAttribute": ""\r\n            },\r\n            "name": "{{WidgetName1}}",\r\n            "dashboardId": "{{DashboardId}}",\r\n            "requests": [\r\n                {\r\n                    "filters": [\r\n                        {\r\n                            "filterName": "containerCuId",\r\n                            "filterValues": [\r\n                                "{{SolutionId}}"\r\n                            ]\r\n                        },\r\n                        {\r\n                            "filterName": "nslDimensions.triggerCUId",\r\n                            "filterValues": [\r\n                                "{{TriggerCuId1}}"\r\n                            ]\r\n                        },\r\n                        {\r\n                            "filterName": "nslDimensions.entityName",\r\n                            "filterValues": [\r\n                                "{{EntityName1}}"\r\n                            ]\r\n                        },\r\n                        {\r\n                            "filterName": "nslDimensions.attributeName",\r\n                            "filterValues": [\r\n                                "{{AttributeName11}}",\r\n                                "{{AttributeName12}}",\r\n                                "{{AttributeName13}}"\r\n                            ]\r\n                        },\r\n                        \r\n                        {\r\n                            "filterName": "nslDimensions.attributeValue",\r\n                            "filterValues": [\r\n                                "{{AttributeValue11}}",\r\n                                "{{AttributeValue12}}",\r\n                                "{{AttributeValue13}}"\r\n                            ]\r\n                        }\r\n                    ]\r\n                }\r\n            ]\r\n        }\r\n    }\r\n]',
    headers: {
      "Accept-Language": "en",
      Authorization: "{{BearerToken}}"
    },
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);

        pm.expect(pm.response.json().message).to.eq(
          "Successfully saved widget"
        );

        pm.expect(parseInt(pm.response.json().result[0].dashboardId)).to.eq(
          pm.variables.get("DashboardId")
        );
        pm.expect(pm.response.json().result[0].dashboardName).to.eq(
          pm.variables.get("DashboardName")
        );

        pm.expect(pm.response.json().result[0].widget.name).to.eq(
          pm.variables.get("WidgetName1")
        );

        pm.expect(
          parseInt(
            pm.response.json().result[0].widget.requests[0].filters[0]
              .filterValues[0]
          )
        ).to.eq(pm.variables.get("SolutionId"));

        pm.expect(
          parseInt(
            pm.response.json().result[0].widget.requests[0].filters[1]
              .filterValues[0]
          )
        ).to.eq(pm.variables.get("TriggerCuId1"));

        pm.expect(
          pm.response.json().result[0].widget.requests[0].filters[2]
            .filterValues[0]
        ).to.eq(pm.variables.get("EntityName1"));

        pm.expect(
          pm.response.json().result[0].widget.requests[0].filters[3]
            .filterValues[0]
        ).to.eq(pm.variables.get("AttributeName11"));
        pm.expect(
          pm.response.json().result[0].widget.requests[0].filters[3]
            .filterValues[1]
        ).to.eq(pm.variables.get("AttributeName12"));
        pm.expect(
          pm.response.json().result[0].widget.requests[0].filters[3]
            .filterValues[2]
        ).to.eq(pm.variables.get("AttributeName13"));

        pm.expect(pm.response.json().result[0].widget.additional.dataset).to.eq(
          pm.variables.get("DatasetName")
        );
        pm.expect(pm.response.json().result[0].widget.additional.group).to.eq(
          pm.variables.get("GroupName")
        );

        pm.expect(pm.response.json().result[0].moduleType).to.eq("bar");
      });
    }
  });

  postman[Request]({
    name: "Get All Groups - Group_Search",
    id: "8968abc8-5d71-4fe6-a120-bb890193e8de",
    method: "GET",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/query/dashboards/groups/list?pageNumber=0&pageSize=10&searchCriteria=",
    headers: {
      "Accept-Language": "en",
      Authorization: "{{BearerToken}}"
    },
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);

        pm.expect(pm.response.json().message).to.eq(
          "Successfully fetched result"
        );
      });
    }
  });

  postman[Request]({
    name: "Get Values with Name",
    id: "a0d8ad08-9bae-4af9-8cae-2782ea046543",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/query/dynamic-search/attributeValues/name/{{AttributeName11}}",
    data:
      '{\r\n    "filters": [\r\n        {\r\n            "filterName": "containerCuId",\r\n            "filterValues": [\r\n                "{{SolutionId}}"\r\n            ]\r\n        },\r\n        {\r\n            "filterName": "nslDimensions.triggerCUId",\r\n            "filterValues": [\r\n                "{{TriggerCuId1}}"\r\n            ]\r\n        },\r\n        {\r\n            "filterName": "nslDimensions.entityName",\r\n            "filterValues": [\r\n                "{{EntityName1}}"\r\n            ]\r\n        },\r\n        {\r\n            "filterName": "nslDimensions.attributeName",\r\n            "filterValues": [\r\n                "{{AttributeName11}}",\r\n                "{{AttributeName12}}",\r\n                "{{AttributeName13}}"\r\n            ]\r\n        }\r\n    ],\r\n    "page": {\r\n        "pageNumber": 0,\r\n        "pageSize": 10\r\n    },\r\n    "queryType": "OR"\r\n}',
    headers: {
      "Accept-Language": "en",
      Authorization: "{{BearerToken}}"
    },
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);

        pm.expect(pm.response.json().message).to.eq(
          "Values with name " +
            pm.variables.get("AttributeName11") +
            " is successfully retrieved"
        );

        pm.expect(pm.response.json().result.result[0]).to.eq(
          pm.variables.get("AttributeValue11")
        );
      });
    }
  });
}
