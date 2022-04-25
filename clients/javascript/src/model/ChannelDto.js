/**
 * Hippo.Web
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Certificate from './Certificate';
import ChannelRevisionSelectionStrategy from './ChannelRevisionSelectionStrategy';
import EnvironmentVariableDto from './EnvironmentVariableDto';
import Revision from './Revision';

/**
 * The ChannelDto model module.
 * @module model/ChannelDto
 * @version 1.0
 */
class ChannelDto {
    /**
     * Constructs a new <code>ChannelDto</code>.
     * @alias module:model/ChannelDto
     * @param id {String} 
     * @param appId {String} 
     * @param name {String} 
     * @param domain {String} 
     * @param revisionSelectionStrategy {module:model/ChannelRevisionSelectionStrategy} 
     * @param environmentVariables {Array.<module:model/EnvironmentVariableDto>} 
     */
    constructor(id, appId, name, domain, revisionSelectionStrategy, environmentVariables) { 
        
        ChannelDto.initialize(this, id, appId, name, domain, revisionSelectionStrategy, environmentVariables);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, appId, name, domain, revisionSelectionStrategy, environmentVariables) { 
        obj['id'] = id;
        obj['appId'] = appId;
        obj['name'] = name;
        obj['domain'] = domain;
        obj['revisionSelectionStrategy'] = revisionSelectionStrategy;
        obj['environmentVariables'] = environmentVariables;
    }

    /**
     * Constructs a <code>ChannelDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelDto} obj Optional instance to populate.
     * @return {module:model/ChannelDto} The populated <code>ChannelDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('appId')) {
                obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('revisionSelectionStrategy')) {
                obj['revisionSelectionStrategy'] = ChannelRevisionSelectionStrategy.constructFromObject(data['revisionSelectionStrategy']);
            }
            if (data.hasOwnProperty('activeRevision')) {
                obj['activeRevision'] = Revision.constructFromObject(data['activeRevision']);
            }
            if (data.hasOwnProperty('rangeRule')) {
                obj['rangeRule'] = ApiClient.convertToType(data['rangeRule'], 'String');
            }
            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = Certificate.constructFromObject(data['certificate']);
            }
            if (data.hasOwnProperty('environmentVariables')) {
                obj['environmentVariables'] = ApiClient.convertToType(data['environmentVariables'], [EnvironmentVariableDto]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ChannelDto.prototype['id'] = undefined;

/**
 * @member {String} appId
 */
ChannelDto.prototype['appId'] = undefined;

/**
 * @member {String} name
 */
ChannelDto.prototype['name'] = undefined;

/**
 * @member {String} domain
 */
ChannelDto.prototype['domain'] = undefined;

/**
 * @member {module:model/ChannelRevisionSelectionStrategy} revisionSelectionStrategy
 */
ChannelDto.prototype['revisionSelectionStrategy'] = undefined;

/**
 * @member {module:model/Revision} activeRevision
 */
ChannelDto.prototype['activeRevision'] = undefined;

/**
 * @member {String} rangeRule
 */
ChannelDto.prototype['rangeRule'] = undefined;

/**
 * @member {module:model/Certificate} certificate
 */
ChannelDto.prototype['certificate'] = undefined;

/**
 * @member {Array.<module:model/EnvironmentVariableDto>} environmentVariables
 */
ChannelDto.prototype['environmentVariables'] = undefined;






export default ChannelDto;

