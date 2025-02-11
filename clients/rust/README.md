# Rust API client for hippo-openapi

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)


## Overview

This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [openapi-spec](https://openapis.org) from a remote server, you can easily generate an API client.

- API version: 1.0
- Package version: 0.8.0
- Build package: `org.openapitools.codegen.languages.RustClientCodegen`

## Installation

Put the package under your project folder in a directory named `hippo-openapi` and add the following to `Cargo.toml` under `[dependencies]`:

```
hippo-openapi = { path = "./hippo-openapi" }
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountApi* | [**api_account_createtoken_post**](docs/AccountApi.md#api_account_createtoken_post) | **POST** /api/account/createtoken | 
*AccountApi* | [**api_account_post**](docs/AccountApi.md#api_account_post) | **POST** /api/account | 
*AppApi* | [**api_app_export_get**](docs/AppApi.md#api_app_export_get) | **GET** /api/app/export | 
*AppApi* | [**api_app_get**](docs/AppApi.md#api_app_get) | **GET** /api/app | 
*AppApi* | [**api_app_id_delete**](docs/AppApi.md#api_app_id_delete) | **DELETE** /api/app/{id} | 
*AppApi* | [**api_app_id_put**](docs/AppApi.md#api_app_id_put) | **PUT** /api/app/{id} | 
*AppApi* | [**api_app_post**](docs/AppApi.md#api_app_post) | **POST** /api/app | 
*CertificateApi* | [**api_certificate_export_get**](docs/CertificateApi.md#api_certificate_export_get) | **GET** /api/certificate/export | 
*CertificateApi* | [**api_certificate_get**](docs/CertificateApi.md#api_certificate_get) | **GET** /api/certificate | 
*CertificateApi* | [**api_certificate_id_delete**](docs/CertificateApi.md#api_certificate_id_delete) | **DELETE** /api/certificate/{id} | 
*CertificateApi* | [**api_certificate_id_put**](docs/CertificateApi.md#api_certificate_id_put) | **PUT** /api/certificate/{id} | 
*CertificateApi* | [**api_certificate_post**](docs/CertificateApi.md#api_certificate_post) | **POST** /api/certificate | 
*ChannelApi* | [**api_channel_channel_id_environment_variables_put**](docs/ChannelApi.md#api_channel_channel_id_environment_variables_put) | **PUT** /api/channel/{channelId}/environment-variables | 
*ChannelApi* | [**api_channel_channel_id_get**](docs/ChannelApi.md#api_channel_channel_id_get) | **GET** /api/channel/{channelId} | 
*ChannelApi* | [**api_channel_export_get**](docs/ChannelApi.md#api_channel_export_get) | **GET** /api/channel/export | 
*ChannelApi* | [**api_channel_get**](docs/ChannelApi.md#api_channel_get) | **GET** /api/channel | 
*ChannelApi* | [**api_channel_id_delete**](docs/ChannelApi.md#api_channel_id_delete) | **DELETE** /api/channel/{id} | 
*ChannelApi* | [**api_channel_id_put**](docs/ChannelApi.md#api_channel_id_put) | **PUT** /api/channel/{id} | 
*ChannelApi* | [**api_channel_logs_channel_id_get**](docs/ChannelApi.md#api_channel_logs_channel_id_get) | **GET** /api/channel/logs/{channelId} | 
*ChannelApi* | [**api_channel_post**](docs/ChannelApi.md#api_channel_post) | **POST** /api/channel | 
*EnvironmentVariableApi* | [**api_environmentvariable_export_get**](docs/EnvironmentVariableApi.md#api_environmentvariable_export_get) | **GET** /api/environmentvariable/export | 
*EnvironmentVariableApi* | [**api_environmentvariable_get**](docs/EnvironmentVariableApi.md#api_environmentvariable_get) | **GET** /api/environmentvariable | 
*EnvironmentVariableApi* | [**api_environmentvariable_id_delete**](docs/EnvironmentVariableApi.md#api_environmentvariable_id_delete) | **DELETE** /api/environmentvariable/{id} | 
*EnvironmentVariableApi* | [**api_environmentvariable_id_put**](docs/EnvironmentVariableApi.md#api_environmentvariable_id_put) | **PUT** /api/environmentvariable/{id} | 
*EnvironmentVariableApi* | [**api_environmentvariable_post**](docs/EnvironmentVariableApi.md#api_environmentvariable_post) | **POST** /api/environmentvariable | 
*JobStatusApi* | [**api_jobstatus_get**](docs/JobStatusApi.md#api_jobstatus_get) | **GET** /api/jobstatus | 
*RevisionApi* | [**api_revision_export_get**](docs/RevisionApi.md#api_revision_export_get) | **GET** /api/revision/export | 
*RevisionApi* | [**api_revision_get**](docs/RevisionApi.md#api_revision_get) | **GET** /api/revision | 
*RevisionApi* | [**api_revision_id_delete**](docs/RevisionApi.md#api_revision_id_delete) | **DELETE** /api/revision/{id} | 
*RevisionApi* | [**api_revision_post**](docs/RevisionApi.md#api_revision_post) | **POST** /api/revision | 
*StorageApi* | [**api_storage_get**](docs/StorageApi.md#api_storage_get) | **GET** /api/storage | 


## Documentation For Models

 - [AppChannelSummary](docs/AppChannelSummary.md)
 - [AppDto](docs/AppDto.md)
 - [AppSummaryDto](docs/AppSummaryDto.md)
 - [AppsVm](docs/AppsVm.md)
 - [CertificateDto](docs/CertificateDto.md)
 - [CertificatesVm](docs/CertificatesVm.md)
 - [ChannelDto](docs/ChannelDto.md)
 - [ChannelJobStatus](docs/ChannelJobStatus.md)
 - [ChannelRevisionSelectionStrategy](docs/ChannelRevisionSelectionStrategy.md)
 - [ChannelsVm](docs/ChannelsVm.md)
 - [CreateAccountCommand](docs/CreateAccountCommand.md)
 - [CreateAppCommand](docs/CreateAppCommand.md)
 - [CreateCertificateCommand](docs/CreateCertificateCommand.md)
 - [CreateChannelCommand](docs/CreateChannelCommand.md)
 - [CreateEnvironmentVariableCommand](docs/CreateEnvironmentVariableCommand.md)
 - [CreateTokenCommand](docs/CreateTokenCommand.md)
 - [EnvironmentVariableDto](docs/EnvironmentVariableDto.md)
 - [EnvironmentVariablesVm](docs/EnvironmentVariablesVm.md)
 - [GetChannelLogsVm](docs/GetChannelLogsVm.md)
 - [JobStatus](docs/JobStatus.md)
 - [RegisterRevisionCommand](docs/RegisterRevisionCommand.md)
 - [RevisionComponentDto](docs/RevisionComponentDto.md)
 - [RevisionDto](docs/RevisionDto.md)
 - [RevisionsVm](docs/RevisionsVm.md)
 - [StorageList](docs/StorageList.md)
 - [TokenInfo](docs/TokenInfo.md)
 - [UpdateAppCommand](docs/UpdateAppCommand.md)
 - [UpdateCertificateCommand](docs/UpdateCertificateCommand.md)
 - [UpdateChannelCommand](docs/UpdateChannelCommand.md)
 - [UpdateChannelEnvironmentVariablesCommand](docs/UpdateChannelEnvironmentVariablesCommand.md)
 - [UpdateEnvironmentVariableCommand](docs/UpdateEnvironmentVariableCommand.md)
 - [UpdateEnvironmentVariableDto](docs/UpdateEnvironmentVariableDto.md)


To get access to the crate's generated documentation, use:

```
cargo doc --open
```

## Author



