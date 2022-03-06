import { utilService } from '../../../service/util-service.js';
import { storageService } from '../../../service/async-storage-service.js';

const EMAILS_KEY = 'emails';
_createEmails();

export const emailService = {
    query,
    get,
    addReview,
    remove,
    save,
    getEmptyEmail
};

function query() {
    return storageService.query(EMAILS_KEY);
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails = [{
            id: 'e101',
            to: 'momo@mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmomo.com',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            sentAt: +new Date() - 3600,
            isChecked: false,
            isRead: false,
            isStared: false,
            status: 'Inbox'
        }, {
            id: 'e102',
            to: 'mimi@mimi.com',
            subject: 'spam!',
            body: 'githubbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            sentAt: +new Date() - 3600 * 10,
            isChecked: false,
            isRead: false,
            isStared: false,
            status: 'Inbox'
        }, {
            id: 'e103',
            to: 'mama@mama.com',
            subject: 'hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii!',
            body: 'alaska',
            sentAt: 1645989216000,
            isChecked: false,
            isRead: false,
            isStared: false,
            status: 'Sent'
        }, {
            id: 'e104',
            to: 'mumu@mumu.com',
            subject: 'coco!',
            body: 'coco jambo',
            sentAt: 1646162016000,
            isChecked: false,
            isRead: false,
            isStared: false,
            status: 'Inbox',
        }, {
            id: 'e105',
            to: 'mlml@mlml.com',
            subject: 'bye!',
            body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            sentAt: 747945115000,
            isChecked: false,
            isRead: false,
            isStared: false,
            status: 'Trash',
        },
        {
            id: 'e106',
            to: 'mlml@mlml.com',
            subject: 'bye!',
            body: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            sentAt: 747945115000,
            isChecked: false,
            isRead: false,
            isStared: false,
            status: 'Trash',
        },
        {
            id: 'e106',
            to: 'mlml@mlml.com',
            subject: 'bye!',
            body: 'cccccccccccccccccccccccccccccccc',
            sentAt: 747945115000,
            isChecked: false,
            isRead: false,
            isStared: false,
            status: 'Trash',
        },
        {
            id: 'e107',
            to: 'mlml@mlml.com',
            subject: 'bye!',
            body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            sentAt: 747945115000,
            isChecked: false,
            isRead: false,
            isStared: false,
            status: 'Drafts',
        }
        ];
        utilService.saveToStorage(EMAILS_KEY, emails);
    }
    return emails;
}

function get(emailId) {
    return storageService.get(EMAILS_KEY, emailId)
        .then(email => {
            return _setNextPrevEmailId(email);
        });
}

function addReview(email, review) {
    review.id = utilService.makeId();
    if (!Array.isArray(email.reviews)) {
        email.reviews = [];
    }
    email.reviews.push(review);
    storageService.put(EMAILS_KEY, email);
    return email;
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}


function save(email) {
    if (email.id) return storageService.put(EMAILS_KEY, email);
    else return storageService.post(EMAILS_KEY, email);
}

function getEmptyEmail() {
    return {
        id: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: + new Date(),
        to: '',
        isChecked: false,
        isStared: false,
        status: 'Sent'
    };
}

function _createEmail(subject, body) {
    const email = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
    };
    return email;
}

function _setNextPrevEmailId(email) {
    return storageService.query(EMAILS_KEY).then(emails => {
        const emailIdx = emails.findIndex(currEmail => currEmail.id === email.id);
        email.nextEmailId = (emails[emailIdx + 1]) ? emails[emailIdx + 1].id : emails[0].id;
        email.prevEmailId = (emails[emailIdx - 1]) ? emails[emailIdx - 1].id : emails[emails.length - 1].id;
        return email;
    });
}
