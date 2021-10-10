<script>
    export let name;
    import {fheap} from "../public/services/fiboHeap";
  
    let words = [
      {
        word: "Arbol",
        meaning: "Nose",
      },
      {
        word: "Arreglo",
        meaning: "Nose",
      },
    ];
  
    let num;
  
    const onSubmitHandler = e => {
      fheap.insert(num);
    }
  </script>
  
  <body>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-4">
          <form on:submit|preventDefault={onSubmitHandler} class="card card-body bg-dark">
            <h4 class="letter">Fibonacci Heap</h4>
            <input
              type="number"
              bind:value={num}
              placeholder="Write an number"
              class="form-control bg-dark text-white border-0 my-4"
            />
            <!-- <textarea
              rows="2"
              bind:value={word.meaning}
              class="form-control bg-dark text-white border-0 my-2"
              placeholder="Meaning"
            /> -->
            <botton type="submit" class="btn btn-primary my-4">Save</botton>
          </form>
        </div>
        <div class="col-md-8">
          <div class="card card-body bg-dark">
            <h4 class="letter">Save word</h4>
          </div>
          <div class="mt-3">
            {#each words as item}
            <ul class="list-group">
              <li class="list-group-item list-group-item-info">A simple info list group item</li>
              <li class="list-group-item list-group-item-light">A simple light list group item</li>
              <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
            </ul>
            {/each}
            <!-- {#each words as w}
              <div class="card card-body mb-2 words">
                <div class="row">
                  <h5>{w.word}</h5>
                  <p class="card-text">{w.meaning}</p>
                  <div class="d-flex justify-content-end">
                    <botton class="btn btn-danger">Delete</botton>
                  </div>
                </div>
              </div>
            {/each} -->
          </div>
        </div>
      </div>
    </div>
  </body>
  
  <style>
    main {
      text-align: center;
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
    }
  
    h4 {
      color: white;
    }
  
    .words {
      width: 26rem;
      margin-left: 2rem;
    }
  
    @media (min-width: 640px) {
      main {
        max-width: none;
      }
    }
  </style>
  