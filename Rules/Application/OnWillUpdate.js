/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/crmMock/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            clientAPI.executeAction('/crmMock/Actions/initsample.action');
            return clientAPI.executeAction('/crmMock/Actions/com_sap_edm_sampleservice_v4/Service/CloseOffline.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Offline Odata Close Failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}