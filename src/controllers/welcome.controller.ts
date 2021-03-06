import { Router, Request, Response } from 'express';
import Controller from '../base/controller';

class WelcomeController extends Controller {
  protected index(request: Request, response: Response) {
    response.send('WelcomeController!');
  }
}

export const welcomeController = new WelcomeController().export();
