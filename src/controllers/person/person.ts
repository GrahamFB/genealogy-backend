import { Request, Response, NextFunction } from "express";
import { Person } from "../../models/person";
import _ from "lodash";

// Create and Save a new Person
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const person = new Person();

    _.extend(person, req.body);

    await person.save();

    res.send(person);
  } catch (error) {
    next(error);
  }
};

// Retrieve all Persons from the database.
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { limit, skip } = req.query;

  const s = skip ? parseInt(skip as string, 10) : 0;
  const l = limit ? parseInt(limit as string, 10) : 100;

  try {
    const persons = await Person.find({}).sort({ _id: -1 }).skip(s).limit(l);

    res.status(200).send(persons);
  } catch (error) {
    next(error);
  }
};

// Find a single Person with an id
export const findOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = req.params;

  try {
    const person = await Person.findOne({ _id });

    res.status(200).send({ person });
  } catch (error) {
    next(error);
  }
};

// Update a Person by the id in the request
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = req.params;

  try {
    const person = await Person.findOne({ _id });

    _.extend(person, req.body);

    await person.save();

    res.status(200).send({ person });
  } catch (error) {
    next(error);
  }
};

// Delete a Person with the specified id in the request
export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = req.params;
  try {
    const person = await Person.findOne({ _id });

    await Person.deleteOne({ _id });

    res.status(204).send({ person });
  } catch (error) {
    next(error);
  }
};
