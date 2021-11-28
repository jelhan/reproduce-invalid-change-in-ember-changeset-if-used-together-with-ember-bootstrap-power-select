import Application from 'reproduce-invalid-change-in-ember-changeset-if-used-together-with-ember-bootstrap-power-select/app';
import config from 'reproduce-invalid-change-in-ember-changeset-if-used-together-with-ember-bootstrap-power-select/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
