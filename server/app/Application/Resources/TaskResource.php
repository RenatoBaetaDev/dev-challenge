<?php
    namespace Resources;

    use Illuminate\Http\Resources\Json\JsonResource;

    class TaskCollection extends JsonResource
    {
        /**
         * Transform the resource collection into an array.
         *
         * @param  \Illuminate\Http\Request  $request
         * @return array
         */

        public function toArray($request)
        {
            $task = [
                'id' => $this->id,
                'description' => $this->description,
                'category' => $this->category,
                'complete' => $this->complete,
                'dueBy' => $this->due_by,
                'costs' => $this->costs,
                'notes' => $this->notes,
            ];

            return $task;
        }
    }