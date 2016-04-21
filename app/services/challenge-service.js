import {Injectable} from 'angular2/core';
import {CHALLENGES} from './challenges-mock';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ChallengeService {

    findAll() {
        return Observable.create(observer => {
            observer.next(CHALLENGES);
            observer.complete();
        });
    }

    findById(id) {
        return Observable.create(observer => {
            observer.next(CHALLENGES[id - 1]);
            observer.complete();
        });
    }
}
