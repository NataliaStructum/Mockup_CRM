/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function openLink(context) {
    const utilsModule = context.nativescript.utilsModule;
    return context.executeAction('/crmMock/Actions/Mensajes/ms_confirmarabrirlink.action').then((result) => {
        if (result.data) {
            //This will open SAP.com website
            return utilsModule.openUrl("https://www.linkedin.com");
        } else {
            return Promise.reject('User Deferred');
        }
    });
}
