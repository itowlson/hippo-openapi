/*
 * Hippo.Web
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct Channel {
    #[serde(rename = "created", skip_serializing_if = "Option::is_none")]
    pub created: Option<String>,
    #[serde(rename = "createdBy", skip_serializing_if = "Option::is_none")]
    pub created_by: Option<String>,
    #[serde(rename = "lastModified", skip_serializing_if = "Option::is_none")]
    pub last_modified: Option<String>,
    #[serde(rename = "lastModifiedBy", skip_serializing_if = "Option::is_none")]
    pub last_modified_by: Option<String>,
    #[serde(rename = "id", skip_serializing_if = "Option::is_none")]
    pub id: Option<String>,
    #[serde(rename = "name", skip_serializing_if = "Option::is_none")]
    pub name: Option<String>,
    #[serde(rename = "domain", skip_serializing_if = "Option::is_none")]
    pub domain: Option<String>,
    #[serde(rename = "revisionSelectionStrategy", skip_serializing_if = "Option::is_none")]
    pub revision_selection_strategy: Option<crate::models::ChannelRevisionSelectionStrategy>,
    #[serde(rename = "rangeRule", skip_serializing_if = "Option::is_none")]
    pub range_rule: Option<String>,
    #[serde(rename = "activeRevisionId", skip_serializing_if = "Option::is_none")]
    pub active_revision_id: Option<String>,
    #[serde(rename = "activeRevision", skip_serializing_if = "Option::is_none")]
    pub active_revision: Option<Box<crate::models::Revision>>,
    #[serde(rename = "certificateId", skip_serializing_if = "Option::is_none")]
    pub certificate_id: Option<String>,
    #[serde(rename = "certificate", skip_serializing_if = "Option::is_none")]
    pub certificate: Option<Box<crate::models::Certificate>>,
    #[serde(rename = "portId", skip_serializing_if = "Option::is_none")]
    pub port_id: Option<i32>,
    #[serde(rename = "appId", skip_serializing_if = "Option::is_none")]
    pub app_id: Option<String>,
    #[serde(rename = "app", skip_serializing_if = "Option::is_none")]
    pub app: Option<Box<crate::models::App>>,
    #[serde(rename = "environmentVariables", skip_serializing_if = "Option::is_none")]
    pub environment_variables: Option<Vec<crate::models::EnvironmentVariable>>,
    #[serde(rename = "domainEvents", skip_serializing_if = "Option::is_none")]
    pub domain_events: Option<Vec<crate::models::DomainEvent>>,
}

impl Channel {
    pub fn new() -> Channel {
        Channel {
            created: None,
            created_by: None,
            last_modified: None,
            last_modified_by: None,
            id: None,
            name: None,
            domain: None,
            revision_selection_strategy: None,
            range_rule: None,
            active_revision_id: None,
            active_revision: None,
            certificate_id: None,
            certificate: None,
            port_id: None,
            app_id: None,
            app: None,
            environment_variables: None,
            domain_events: None,
        }
    }
}


