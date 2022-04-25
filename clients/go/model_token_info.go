/*
Hippo.Web

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hippo-openapi

import (
	"encoding/json"
	"time"
)

// TokenInfo struct for TokenInfo
type TokenInfo struct {
	Token NullableString `json:"token,omitempty"`
	Expiration *time.Time `json:"expiration,omitempty"`
}

// NewTokenInfo instantiates a new TokenInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTokenInfo() *TokenInfo {
	this := TokenInfo{}
	return &this
}

// NewTokenInfoWithDefaults instantiates a new TokenInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTokenInfoWithDefaults() *TokenInfo {
	this := TokenInfo{}
	return &this
}

// GetToken returns the Token field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *TokenInfo) GetToken() string {
	if o == nil || o.Token.Get() == nil {
		var ret string
		return ret
	}
	return *o.Token.Get()
}

// GetTokenOk returns a tuple with the Token field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *TokenInfo) GetTokenOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.Token.Get(), o.Token.IsSet()
}

// HasToken returns a boolean if a field has been set.
func (o *TokenInfo) HasToken() bool {
	if o != nil && o.Token.IsSet() {
		return true
	}

	return false
}

// SetToken gets a reference to the given NullableString and assigns it to the Token field.
func (o *TokenInfo) SetToken(v string) {
	o.Token.Set(&v)
}
// SetTokenNil sets the value for Token to be an explicit nil
func (o *TokenInfo) SetTokenNil() {
	o.Token.Set(nil)
}

// UnsetToken ensures that no value is present for Token, not even an explicit nil
func (o *TokenInfo) UnsetToken() {
	o.Token.Unset()
}

// GetExpiration returns the Expiration field value if set, zero value otherwise.
func (o *TokenInfo) GetExpiration() time.Time {
	if o == nil || o.Expiration == nil {
		var ret time.Time
		return ret
	}
	return *o.Expiration
}

// GetExpirationOk returns a tuple with the Expiration field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TokenInfo) GetExpirationOk() (*time.Time, bool) {
	if o == nil || o.Expiration == nil {
		return nil, false
	}
	return o.Expiration, true
}

// HasExpiration returns a boolean if a field has been set.
func (o *TokenInfo) HasExpiration() bool {
	if o != nil && o.Expiration != nil {
		return true
	}

	return false
}

// SetExpiration gets a reference to the given time.Time and assigns it to the Expiration field.
func (o *TokenInfo) SetExpiration(v time.Time) {
	o.Expiration = &v
}

func (o TokenInfo) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Token.IsSet() {
		toSerialize["token"] = o.Token.Get()
	}
	if o.Expiration != nil {
		toSerialize["expiration"] = o.Expiration
	}
	return json.Marshal(toSerialize)
}

type NullableTokenInfo struct {
	value *TokenInfo
	isSet bool
}

func (v NullableTokenInfo) Get() *TokenInfo {
	return v.value
}

func (v *NullableTokenInfo) Set(val *TokenInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableTokenInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableTokenInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTokenInfo(val *TokenInfo) *NullableTokenInfo {
	return &NullableTokenInfo{value: val, isSet: true}
}

func (v NullableTokenInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTokenInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


